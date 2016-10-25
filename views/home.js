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
            <div className="valign-wrapper">
            <div className="col s12 m6 l6 valign">

              <p>
                Since its release in March, MapHubs has become a home for hundreds of open environmental map layers. After announcing Map for Environment last month at the IUCN World Conservation Congress we have received awesome feedback around using OpenStreetMap (OSM) to map areas such as logging roads, palm plantations, and dams. Combining the OSM base map with MapHubs layers on land rights, deforestation, animal habitats, and more allows our users to truly understand what is happening on the ground. MapHubs is a tool not just to quantify the problem, but to tell the stories of what is happening. 
              </p>
              <p>
                We have merged MapHubs.com into Map for Environment and all of our environmental work will now be part of Map For Environment.
              </p>


          </div>
          <div className="col s12 m6 l6 valign" style={{height: '100%'}}>
            <a className="" href="https://medium.com/map-for-environment" target="_blank">
              <img className="responsive-img " src="/assets/home/maphubs-m4e.jpg" style={{width: '600px'}}></img>
            </a>
          </div>
          </div>
       </div>
       <div className="row center center-align">
         <a className="btn waves-effect" style={{borderRadius: '25px'}} lang="en" href="https://medium.com/map-for-environment" target="_blank">Learn More</a>
       </div>
       <div className="divider" />
       <div className="row no-margin" style={{marginBottom: '50px'}}>
           <h4 lang="en">MapHubs Software</h4>
           <div className="valign-wrapper">
         <div className="col s12 m6 l6 valign">
             <img className="responsive-img" src="/assets/home/maphubs.jpg" style={{width: '100%'}}></img>
         </div>
         <div className="col s12 m6 l6 valign">
           <p>MapHubs is the open-source software project behind Map for Environment.
           You can use MapHubs on your own site or inside your organization.
           </p>

         </div>
          </div>
      </div>
      <div className="row center center-align">
        <a className="btn waves-effect" style={{borderRadius: '25px'}} lang="en" href="/services">Learn More About MapHubs</a>
      </div>
      <div className="divider" />
         <div className="row" style={{marginBottom: '50px'}}>
            <h4 lang="en">CrowdCover LLC</h4>
           <p>MapHubs is a product of CrowdCover. CrowdCover LLC is a Washington D.C. based tech company providing consulting services and support for the open-source MapHubs software.</p>
             <div className="row center center-align">
               <a className="btn waves-effect" style={{borderRadius: '25px'}} lang="en" href="/crowdcover">Learn More About CrowdCover</a>
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
