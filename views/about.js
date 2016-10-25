var React = require('react');

var Header = require('../components/header');
var Footer = require('../components/footer');

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);
var LocaleStore = require('../stores/LocaleStore');
var Locales = require('../services/locales');

var SubPageBanner = require('../components/Home/SubPageBanner');

var config = require('../clientconfig');

var About = React.createClass({

  mixins:[StateMixin.connect(LocaleStore, {initWithProps: ['locale']})],

  __(text){
    return Locales.getLocaleString(this.state.locale, text);
  },

  propTypes: {
    locale: React.PropTypes.string.isRequired
  },

  render() {

      return (
        <div>
          <Header activePage="about"/>
            <SubPageBanner locale={this.props.locale}
              img="/assets/home/Moabi-Aerial.jpg"
               title={this.__('About MapHubs')}
               subTitle={'MapHubs software makes beautiful maps for your website'} />
          <main className="container">

            <div className="row" style={{marginTop: '30px'}}>
                <h4 lang="en">What is MapHubs</h4>
                <div className="row no-margin">
                <div className="col s12">
                  <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                    MapHubs is <a href="https://github.com/maphubs/maphubs" target="_blank">open-source</a> software that you can install on your website or on a server inside your network.
                    We can provide <a href="/services">consulting services</a> to help you get started or to help you customize MapHubs for your needs.
                  </p>
                  <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                    MapHubs powers <a href="https://mapforenvironment.org">Map for Environment</a>.
                    The easiest way to use MapHubs is through <a href="https://mapforenvironment.org">Map for Environment</a>.
                    It is free for public data, and we plan to add premium features such as private data in the near future.
                  </p>
                </div>

              </div>
              <div className="row no-margin">
              <div className="col s12">
                <div  className="video-container">
                  <iframe src="https://maphubs.com/map/embed/164/static" frameBorder="0"></iframe>
                </div>
              </div>
            </div>
          
          </div>
          </main>
          <Footer />
        </div>
      );
  }
});

module.exports = About;
