module.exports = {
  host: process.env.OMH_HOST ? process.env.OMH_HOST : process.env.TUTUM_SERVICE_FQDN,
  port: process.env.OMH_PORT,
  internal_port: process.env.OMH_INTERNAL_PORT,
  publicFilePath: '/app/public/',
  LOGGLY_API_KEY: process.env.OMH_LOGGLY_API_KEY,
  SESSION_SECRET:  process.env.OMH_SESSION_SECRET,
  disableTracking:  process.env.OMH_DISABLE_TRACKING,
  mapHubsPro: process.env.OMH_MAPHUBS_PRO,
  fromEmail: process.env.OMH_FROM_EMAIL,
};
