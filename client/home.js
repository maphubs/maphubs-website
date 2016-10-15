const React  = require('react');
const ReactDOM = require('react-dom');

if (!global.Intl) {
 require('intl');
 require('intl/locale-data/jsonp/en.js');
 require('intl/locale-data/jsonp/es.js');
 require('intl/locale-data/jsonp/fr.js');
 require('intl/locale-data/jsonp/it.js');
}

require('babel-polyfill');
var Home = require('../views/home');


document.addEventListener('DOMContentLoaded', () => {
  let data = window.__appData;

  ReactDOM.render(
    <Home
      locale={data.locale} version={data.version}/>,
    document.querySelector('#app')
  );
});
