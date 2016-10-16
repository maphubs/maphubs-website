var local = require('./local');

var express = require('express'),
  load = require('express-load'),
  path = require('path'),
  logger = require('morgan'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  xmlparser = require('express-xml-bodyparser'),
   i18n = require("./i18n"),
  compression = require('compression');


var webpack = require("webpack");
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
var session = require('express-session');

var log = require('./services/log.js');


  require('babel-core/register')({
    ignore: /node_modules\/(?!(react-slick|reflux-state-mixin)).*/
  });
  require('babel-polyfill');

var app = express();
//settings flags
app.enable('trust proxy');
app.disable('view cache'); //cache may be causing weird issues in production, due to our custom React view implementation
app.disable("x-powered-by");

process.on('uncaughtException', function(err) {
  log.error('Caught exception: ' + err.stack);
});

if (app.get('env') !== 'production') {
  require("nodejs-dashboard");
}

//use compression
app.use(compression());

//CORS
app.use(cors());
app.options('*', cors());

var sess = {
  secret: local.SESSION_SECRET,
  resave: false,
  proxy: true,
  saveUninitialized: true,
  cookie: {
        path: '/',
        domain: '.' + local.host
    }
};

if (app.get('env') === 'production') {
  sess.cookie.secure = true;
}

app.use(session(sess));

//by default set language based on browser 'accept-language' headers
app.use(i18n.init);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'js');
app.engine('js', require('./services/express-react-views').createEngine());


app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: false
}));
app.use(xmlparser({explicitArray: false, mergeAttrs: true}));

//serve API docs

app.use('/assets', express.static('assets'));

//use webpack middleware in local dev environment
if(process.env.NODE_ENV !== 'production'){
  var webpackDevMiddleware = require("webpack-dev-middleware");
  log.info('Dev: Using Webpack Dev Middleware');
  app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats:{
        chunks: false,
        timings: false,
        assets: false,
        modules: false,
        children: false
      }
  }));
} else {
  //serve static and client JS
  log.info('Prod: using static public ');
  app.use('/public', express.static(local.publicFilePath));
}

//load all route files using express-load
load('./routes').into(app);


//error handling

app.use(function(req, res, next) {

  //bypass for dynamically created tile URLs
  if(req.url.includes('/api/tiles/') || req.url.includes('/dialog/authorize/decision')){
    next();
  } else {

    res.status(404);

    if (req.accepts('html')) {
      res.render('error', {
        title: req.__('404: Page not found'),
        props: {
          title: req.__('404: Page not found'),
          error: req.__('404: Page not found'),
          url: req.url
        },
        /*eslint-disable*/
        req: req
        /*eslint-enable*/
      });
      return;
    }

    if (req.accepts('json')) {
      res.send({
        title: req.__('404: Page not found'),
        error: req.__('404: Page not found'),
        url: req.url
      });
    }
}
});


app.use(function(err, req, res, next) {

  //bypass for dynamically created tile URLs
  if(req.url.includes('/api/tiles/')){
    next();
  } else {
  // curl https://localhost:4000/error/403 -vk
  // curl https://localhost:4000/error/403 -vkH "Accept: application/json"
  var statusCode = err.status || 500;
  var statusText = '';
  //var errorDetail = (process.env.NODE_ENV === 'production') ? '' : err.stack;
  var errorDetail = err.stack;

  switch (statusCode) {
    case 400:
      statusText = 'Bad Request';
      break;
    case 401:
      statusText = 'Unauthorized';
      break;
    case 403:
      statusText = 'Forbidden';
      break;
    case 500:
      statusText = 'Internal Server Error';
      break;
  }

  log.error(err.stack);

  if (req.accepts('html')) {
    res.status(statusCode).render('error', {
    title: statusCode + ': ' + statusText,
    props: {
      title: statusCode + ': ' + statusText,
      error: errorDetail,
      url: req.url
      }
    });
    return;

  }

  if (req.accepts('json')) {
    res.status(statusCode).send({
      title: statusCode + ': ' + statusText,
      error: errorDetail,
      url: req.url
    });
  }
}
});


var http = require('http');
var server = http.createServer(app);
server.setTimeout(10*60*1000); // 10 * 60 seconds * 1000 msecs
server.listen(local.internal_port, function () {
    log.info('**** STARTING SERVER ****');
    log.info('Server Running on port: ' + local.internal_port);
});
