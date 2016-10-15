#!/bin/sh

#overwrite the client-config with live values
cat <<EOF >/app/clientconfig.js
module.exports = {
  host: "${OMH_HOST}",
  port: ${OMH_PORT},
  https: ${OMH_HTTPS},
  productName: "${OMH_PRODUCT_NAME}",
  logo: "${OMH_LOGO}",
  logoSmall: "${OMH_LOGO_SMALL}",
  logoWidth: ${OMH_LOGO_WIDTH},
  logoHeight: ${OMH_LOGO_HEIGHT},
  logoSmallWidth: ${OMH_LOGO_WIDTH_SMALL},
  logoSmallHeight: ${OMH_LOGO_HEIGHT_SMALL},
  primaryColor: "${OMH_PRIMARY_COLOR}",
  betaText: "${OMH_BETA_TEXT}",
  twitter: "${OMH_TWITTER}",
  contactEmail: "${OMH_CONTACT_EMAIL}",
  mapHubsPro: ${OMH_MAPHUBS_PRO},
  theme: "${OMH_THEME}",
  redirectDomain: "${OMH_REDIRECT_DOMAIN}"
};
EOF

cp /app/css/${OMH_THEME}.scss /app/theme.scss


#rebuild client files
node node_modules/webpack/bin/webpack.js --config webpack.config.min.js

#start server
pm2 start app.js --name maphubs --node-args="--max-old-space-size=$NODE_MEM_SIZE" --no-daemon
