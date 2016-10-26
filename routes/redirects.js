var config = require('../clientconfig');

module.exports = function(app) {

//Subpages
app.get('/layers', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/maps', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/groups', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/hubs', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/stories', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/explore', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/search', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});



//API and 3rd+ level pages

app.get('/api/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/tiles/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/layer/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/feature/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/map/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/user/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/hub/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/story/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/group/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/image/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});

app.get('/raster/*', function(req, res) {
  return res.redirect(301, config.redirectDomain + req.originalUrl);
});


};
