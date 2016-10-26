var React = require('react');
var Header = require('../components/header');
var Footer = require('../components/footer');

var Carousel = require('nuka-carousel');
import SliderDecorators from '../components/Home/SliderDecorators';

//var OnboardingLinks = require('../components/Home/OnboardingLinks');
//var MapHubsProLinks = require('../components/Home/MapHubsProLinks');
var config = require('../clientconfig');

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);
var LocaleStore = require('../stores/LocaleStore');
var Locales = require('../services/locales');

var Home = React.createClass({

  mixins:[StateMixin.connect(LocaleStore, {initWithProps: ['locale']})],

  __(text){
    return Locales.getLocaleString(this.state.locale, text);
  },

  propTypes: {
    locale: React.PropTypes.string.isRequired
  },

  getInitialState(){
    return {

    };
  },

	render() {

     var slides = [
       {
         title: this.__('Mapping for Everyone'),
         text: 'MapHubs software makes beautiful maps for your website and social media',
         buttonText: this.__('Learn More'),
         link: '/about',
         img: '/assets/home/Moabi-Aerial.jpg'
       },
       {
         title: this.__('Maps for Journalists'),
         text: this.__('Tell Your Story with Maps'),
         buttonText: this.__('Learn More'),
         link: '/journalists',
         img: '/assets/home/Moabi-Canoe.jpg'
       },
       {
         title: this.__('Map for Environment'),
         text:  this.__('MapHubs powers Map for Environment, a home for the world\'s open evironmental map data.' ),
         buttonText: this.__('Go to Map for Environment'),
         link: 'https://mapforenvironment.org',
         img: '/assets/home/MapHubs-Map.jpg'
       },
       {
         title: this.__('Services'),
         text:  this.__('We offer a range of service to help you get mapping'),
         buttonText: this.__('Learn More'),
         link: '/services',
         img: '/assets/home/Moabi-Forest.jpg'
       }
     ];

     var homePageCarousel  = (
         <div className="row" style={{marginTop: 0, marginBottom: 0, height: '70%', maxHeight:'600px'}}>
           <Carousel autoplay={true} slidesToShow={1} autoplayInterval={5000} wrapAround={true}
             decorators={SliderDecorators}>
             {slides.map(function(slide, i){
               return (
                 <div key={i} className="homepage-slide responsive-img valign-wrapper"
                   style={{
                     height: '100%',
                     backgroundSize: 'cover',
                     backgroundImage: 'url('+ slide.img + ')'
                   }}>
                   <div className="slide-text">
                     <h2 className="no-margin">{slide.title}</h2>
                     <h3 className="no-margin">{slide.text}</h3>
                   </div>
                   <div className="slide-button center">
                     <a className="btn waves-effect z-depth-3" style={{borderRadius: '25px'}} href={slide.link}>{slide.buttonText}</a>
                   </div>
                </div>
              );
             })}
           </Carousel>
         </div>
       );


		return (
      <div style={{margin: 0, height: '100%'}}>
      <Header />
      <main style={{margin: 0, height: '100%'}}>
        {homePageCarousel}
        <div className="container">
        <div className="row no-margin" style={{marginBottom: '50px'}}>
          <h4 lang="en">MapHubs is Now Map for Environment</h4>
          <div className="center center-align">
            <a  href="https://medium.com/map-for-environment" target="_blank">
              <img className="responsive-img " src="/assets/home/maphubs-m4e.jpg" style={{width: '600px'}}></img>
            </a>
          </div>
          <p>
            We've decided to integrate MapHubs and our recently launched <a href="https://mapforenvironment.org">Map for Environment</a> site. You can now both map directly Openstreetmap and publish fast interactive MapHubs style maps.
            All of your data and accounts will stay the same. Read our <a href="https://mapforenvironment.org/user/map4env/story/61/MapHubs-is-now-Map-for-Environment" target="_blank">full announcement</a> to learn more about why are making this change and what it means for the future of Map for Environment and MapHubs.
            </p>
       </div>
       <div className="row center center-align" style={{marginTop: '20px'}}>
         <a className="btn waves-effect" style={{borderRadius: '25px'}} lang="en" href="https://mapforenvironment.org/user/map4env/story/61/MapHubs-is-now-Map-for-Environment" target="_blank">Learn More</a>
       </div>
       <div className="divider" />
       <div className="row no-margin" style={{marginBottom: '50px'}}>
           <h4 lang="en">MapHubs Software</h4>
             <p>
               MapHubs is the open-source software project behind Map for Environment.
             You can use MapHubs on your own site or inside your organization.
             </p>
           <div className="center center-align">
            <img className="responsive-img" src="/assets/home/maphubs-example.jpg" style={{width: '100%'}}></img>
          </div>

      </div>
      <div className="row center center-align" style={{marginTop: '20px'}}>
        <a className="btn waves-effect" style={{borderRadius: '25px'}} lang="en" href="/services">Learn More About MapHubs</a>
      </div>
      <div className="divider" />
         <div className="row" style={{marginBottom: '50px'}}>
            <h4 lang="en">CrowdCover LLC</h4>
           <p style={{marginBottom: '10px'}}>MapHubs is a product of CrowdCover. CrowdCover LLC is a Washington D.C. based tech company providing consulting services and support for the open-source MapHubs software.</p>
             <div className="row center center-align" style={{marginTop: '20px'}}>
               <a className="btn waves-effect" style={{borderRadius: '25px'}} lang="en" href="http://crowdcover.us">Learn More About CrowdCover</a>
             </div>
        </div>
        </div>


          <Footer />
       </main>

			</div>
		);
	}
});

module.exports = Home;
