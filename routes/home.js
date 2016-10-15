var config = require('../clientconfig');

module.exports = function(app) {

  app.get('/', function(req, res) {

    res.render('home', {
      title: config.productName + ' | ' + req.__('A home for the world\'s open data and an easy way to make maps.'),
      descripion: config.productName + req.__(' is a home for the world\'s open map data and an easy tool for making and sharing maps.'),
      props: {}, req
    });

  });


  app.get('/services', function(req, res) {
    res.render('services', {
      title: req.__('Services') + ' - ' + config.productName,
      req
    });
  });

  app.get('/journalists', function(req, res) {
    res.render('journalists', {
      title: req.__('Maps for Journalists') + ' - ' + config.productName,
      req
    });
  });

  app.get('/about', function(req, res) {
    res.render('about', {
      title: req.__('About') + ' - MapHubs',
      props: {},
      req
    });
  });

  app.get('/crowdcover', function(req, res) {
    res.render('crowdcover', {
      title: req.__('About') + ' - CrowdCover',
      props: {},
      req
    });
  });

  app.post('/api/user/setlocale', function(req, res) {
    var data = req.body;
    if(data.locale){
      req.session.locale = data.locale;
      req.setLocale(data.locale);
    }
    res.status(200).send({success: true});

  });


};
