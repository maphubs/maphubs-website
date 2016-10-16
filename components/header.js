var React = require('react');
var $ = require('jquery');

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);

var config = require('../clientconfig');

var LocaleStore = require('../stores/LocaleStore');
var Locales = require('../services/locales');
//var LocaleChooser = require('./LocaleChooser');

var Header = React.createClass({

  mixins:[StateMixin.connect(LocaleStore)],

  __(text){
    return Locales.getLocaleString(this.state.locale, text);
  },

  propTypes:  {
    activePage: React.PropTypes.string
  },

  componentDidMount() {
    $(".button-collapse").sideNav();
    //$(".dropdown-button").dropdown({hover: true});
  },

  render() {

    var defaultLinkClasses = "nav-link-item";
    var activeLinkClasses = "nav-link-item active";

    var servicesClasses = defaultLinkClasses,
        aboutClasses = defaultLinkClasses,
        crowdcoverClasses = defaultLinkClasses;

    if(this.props.activePage){
      var activePage = this.props.activePage;
      if(activePage == 'services'){
        servicesClasses = activeLinkClasses;
      }else if(activePage == 'about'){
        aboutClasses = activeLinkClasses;
      }else if(activePage == 'crowdcover'){
        crowdcoverClasses = activeLinkClasses;
      }
    }

    return (
      <header>

      <nav style={{boxShadow: '0 0 1px rgba(0,0,0,0.7)'}}>
        <div className="nav-wrapper z-depth-0">
          <a className="brand-logo valign-wrapper" href="/">
            <img className="valign" width="148" height="40" style={{margin: '5px'}} src={config.logo} alt={config.productName + ' ' + this.__('Logo')}/>
              <small style={{color: '#222222', position: 'absolute', top: '12px', left: '150px', fontSize: '12px'}}>{config.betaText}</small>

          </a>


          <a className="button-collapse grey-text text-darken-4" data-activates="side-nav-menu" href="#"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li className="nav-link-wrapper">
              <a className={servicesClasses} href='/services'>{this.__('Services')}</a>
            </li>
            <li className="nav-link-wrapper">
              <a className={aboutClasses} href='/about'>{this.__('About MapHubs')}</a>
            </li>
            <li className="nav-link-wrapper">
              <a className={crowdcoverClasses} href='/crowdcover'>{this.__('About CrowdCover')}</a>
            </li>
            <li className="nav-link-wrapper">
              <a  className="nav-link-item" href='http://help.maphubs.com'>{this.__('Help')}</a>
            </li>

          </ul>
          <ul className="side-nav" id="side-nav-menu">

            <li className="nav-link-wrapper">
              <a className={servicesClasses} href='/services'>{this.__('Services')}</a>
            </li>

            <li className="nav-link-wrapper">
              <a className={aboutClasses} href='/about'>{this.__('About MapHubs')}</a>
            </li>
            <li className="nav-link-wrapper">
              <a className={crowdcoverClasses} href='/crowdcover'>{this.__('About CrowdCover')}</a>
            </li>
            <li className="nav-link-wrapper">
              <a  className="nav-link-item" href='http://help.maphubs.com' target="_blank">{this.__('Help')}</a>
            </li>

          </ul>

        </div>
      </nav>
      </header>
    );
  }
});

module.exports = Header;
