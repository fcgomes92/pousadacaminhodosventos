import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import {ROUTES} from './routes';
import s from './strings';
import SubscribeComponent from './Components/SubscribeComponent/SubscribeComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import PhotosComponent from './Components/PhotosComponent/PhotosComponent';
import Footer from './Components/Footer/FooterComponent';
import AboutDialog from './Components/AboutDialog/AboutDialog';
import ContactDialog from './Components/ContactDialog/ContactDialog';
import {disableLog} from './util';

disableLog();

const strings = s.strings.app;

// TODO: Move this to another file
class App extends Component {
  handleOnContactClick = (event) => {
    event.preventDefault();
    this.toggleContactDialog();
  }

  handleOnAboutClick = (event) => {
    event.preventDefault();
    this.toggleAboutDialog();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="content">
            <Route exact={ROUTES.subscribeComponent.exact} path={ROUTES.subscribeComponent.path} component={props=>{
              return <SubscribeComponent {...props} contactCallback={this.handleOnContactClick}/>;
            }}/>
            <Route exact={ROUTES.aboutComponent.exact} path={ROUTES.aboutComponent.path} component={(props)=>{
                return <AboutComponent {...props} contactCallback={this.handleOnContactClick}/>;
              }}/>
            <Route exact={ROUTES.photosComponent.exact} path={ROUTES.photosComponent.path} component={props=>{
              return <PhotosComponent {...props} contactCallback={this.handleOnContactClick}/>;
            }}/>
            <Route exact path={'/off'} render={() => {
              return (
                <div>Parece que você esta offline</div>
              )
            }}/>
          </div>
          <Footer links={<div>
            <a href="#" onClick={this.handleOnContactClick}>{strings.footerContact}</a>
            <a href="#" onClick={this.handleOnAboutClick}>{strings.footerAbout}</a>
            </div>}/>
          <AboutDialog ref={aboutDialog => {if(aboutDialog) this.toggleAboutDialog = aboutDialog.handleToggle}}/>
          <ContactDialog ref={contactDialog => {if (contactDialog) this.toggleContactDialog = contactDialog.handleToggle}}/>
        </div>
      </Router>
    )
  }
}

document.title = strings.pageTitle;

render(
  <App/>, document.getElementById('root'));
