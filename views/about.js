var React = require('react');

var Header = require('../components/header');
var Footer = require('../components/footer');

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);
var LocaleStore = require('../stores/LocaleStore');
var Locales = require('../services/locales');

var SubPageBanner = require('../components/Home/SubPageBanner');

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
               subTitle={'MapHubs software makes beautiful maps for your website and social media'} />
          <main className="container">

            <div className="row">
              <h4 lang="en">What is MapHubs</h4>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                MapHubs is software for making beautiful maps for your website and social media.
                It’s designed to be simple to use and requires no knowledge of GIS or coding to make custom maps using your data or third party data.
                It’s perfect for organizations that want to make maps quickly with minimal hassle.
                If you’re a journalist, a small nonprofit, a university researcher, or bootstrapped startup, MapHubs can become your in house cartography department with map data and management tools at your fingertips.
              </p>
            </div>
            <div className="row">
              <h4 lang="en">Features </h4>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                MapHubs helps you take your data mapping data and gives your team simple tools to turn data into beautiful fast, interactive maps that require no GIS or coding.
                You upload your data into the platform, edit the attributes, and then combine it with other mapping data layers to make maps.
              </p>
            </div>
            <div className="row">
              <h4 lang="en">Data management</h4>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                MapHubs has a permissions system called “groups”. By setting up a group, you and your team can upload and create map layers following a step by step process. You can upload spatial files (e.g., shapefiles, geojson) directly into your groups and then manage the data using simple and intuitive OpenStreetMap tools.
              </p>
            </div>
            <div className="row">
              <h4 lang="en">Publishing</h4>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                MapHubs helps you make three map products:
              </p>
              <h5 lang="en">Interactive maps</h5>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                Use your data or third party data to quickly build fast, interactive maps with custom colors, labels, with different base maps to choose from.
                Our intuitive map maker will help you make a custom interactive map to embed in your website or social media feed in minutes.
              </p>
              <h5 lang="en">Map stories</h5>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                With a simple intuitive rich text editor, you can turn your maps in map stories.
                Embed your maps into your story and then share the link.
                You can also embed your maps directly into other publishing platforms such as WordPress sites.
              </p>
              <h5 lang="en">Hubs</h5>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                If you have many maps and stories, organize them into a mini website called a “hub”.
                Hubs feature a large interactive map, space for publishing multiple map stories and a space for posting links to other websites and documents for downloads.
                Hubs are perfect for small projects with multiple collaborators.
              </p>
            </div>
            <div className="row">
              <h4 lang="en">Try MapHubs for free!</h4>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                MapHubs powers <a href="https://mapforenvironment.org" target="_blank">Map for Environment</a> - a public data platform hosting the world’s open environment and development data and simple tool for making maps.
              </p>
            </div>
            <div className="row">
              <h4 lang="en">Getting started</h4>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                MapHubs offers a range of services to help you get mapping. Visit our <a href="/services">services</a> page or <a href="#" onClick={function(){HS.beacon.open();}}>contact us</a> to learn more.
              </p>
            </div>
          </main>
          <Footer />
        </div>
      );
  }
});

module.exports = About;
