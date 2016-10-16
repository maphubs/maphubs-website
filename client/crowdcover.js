const React  = require('react');
const ReactDOM = require('react-dom');

const Crowdcover = require('../views/crowdcover');

document.addEventListener('DOMContentLoaded', () => {
  let data = window.__appData;

  ReactDOM.render(
    <Crowdcover locale={data.locale} version={data.version}/>,
    document.querySelector('#app')
  );

});
