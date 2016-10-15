var React = require('react');

var Header = require('../components/header');
var Footer = require('../components/footer');

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);
var LocaleStore = require('../stores/LocaleStore');
var Locales = require('../services/locales');

var SubPageBanner = require('../components/Home/SubPageBanner');

var config = require('../clientconfig');

var CrowdCover = React.createClass({

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
          <Header activePage="crowdcover"/>
            <SubPageBanner locale={this.props.locale}
              img="/assets/home/Moabi-Aerial.jpg"
               title={this.__('CrowdCover')}
               subTitle={'CrowdCover LLC is a Washington D.C. based tech company providing consulting services and support for the open-source MapHubs software'} />
          <main className="container">

            <div className="row" style={{marginTop: '30px'}}>

                <h4 lang="en">Our background</h4>
                <div className="row no-margin">
                <div className="col s12 m12 l5">
                  <p lang="en" style={{fontSize: '18px', marginTop: 0}}>

                  </p>
                </div>
                <div className="col s12 m12 l7">
                  <div  className="video-container">
                    <iframe src="https://maphubs.com/map/embed/164/static" frameBorder="0"></iframe>
                  </div>
                </div>
              </div>
              <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                This vital data is locked up in a variety of data formats, at different scales, and increasingly fragmented, making it inaccessible to those who want to use it. A major reason for this is data producers (governments, companies, etc.) often don’t have a relationship those who use their data. This makes sharing their data a black box; they don’t know who downloads or uses it. This makes map data difficult to find and use in meaningful ways. Even if data is available, making maps is needlessly complicated and expensive, which disenfranchises many who simply want to make maps.
              </p>

                <div className="divider" />

                <h4 lang="en">Who we are</h4>
                <div className="row">
                  <div className="col s12 m12 l6">
                    <div className="circle"
                      style={{width: '250px', height: '250px',   margin: 'auto',
                        backgroundSize: 'cover',
                        backgroundPosition: '30% 50%',
                        backgroundImage: 'url(/assets/about/leo.jpg)'
                      }} />
                    <h5 lang="en">Leo Bottrill – Founder and CEO</h5>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Leo is the founder and CEO of CrowdCover LLC, a Washington DC-based company, dedicated to making maps more accessible to everyone. Leo has 15 years of experience in the environment and development sector including over 4 years working in field conservation in Vietnam and Indonesia.
                    </p>
                    <p lang="en" style={{fontSize: '18px'}}>
                      Prior to founding CrowdCover, Leo started the awarding winning Moabi DRC initiative (rdc.moabi.org) in the Democratic Republic of the Congo. Moabi DRC is the most comprehensive public database on land use in DRC. It is implemented by Observatoire Satellital des Forêts d'Afrique Centrale, a regional forest monitoring organization, and supported by a consortium of nonprofits, government agencies, research organizations, and companies.
                    </p>
                  </div>
                  <div className="col s12 m12 l6">
                    <div className="circle"
                      style={{width: '250px', height: '250px',   margin: 'auto',
                        backgroundSize: 'cover',
                        backgroundPosition: '30% 50%',
                        backgroundImage: 'url(/assets/about/kris.jpg)'
                      }} />
                    <h5 lang="en">Kristofor Carle – Chief Technology Officer</h5>
                    <p lang="en" style={{fontSize: '18px', marginTop: 0}}>
                      Kris is a geospatial software engineer focusing on spatial databases, web mapping applications, data analytics, and mobile applications. Before joining CrowdCover, Kris led a large geospatial data warehouse project and a mobile mapping application as a contractor for U.S. Army. He is very passionate about open-source technologies and has made over 1 million contributions to OpenStreetMap!
                    </p>
                  </div>
                </div>
            </div>

            <div className="divider"></div>
            <div className="row">
              <p lang={this.props.locale}>{config.productName + ' ' + this.__('is open source and avaliable on GitHub at')} <a target="_blank" href="https://github.com/maphubs/maphubs">https://github.com/maphubs/maphubs</a></p>
            </div>
          </main>
          <Footer />
        </div>
      );


  }
});

module.exports = CrowdCover;
