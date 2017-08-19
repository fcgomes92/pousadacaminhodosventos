import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'react-mdl/extra/css/material.green-teal.min.css';
import 'react-mdl/extra/material.js';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';
import './index.css';
import {ROUTES} from './routes';
import s from './strings';
import SubscribeComponent from './Components/SubscribeComponent/SubscribeComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import AboutDialog from './Components/AboutDialog/AboutDialog';
import ContactDialog from './Components/ContactDialog/ContactDialog';
import PhotosComponent from './Components/PhotosComponent/PhotosComponent';
import {disableLog} from './util';

disableLog();

const strings = s.strings.app;

// TODO: Move this to another file
class App extends Component {
  handleOnContactClick = () => {
    this.toggleContactDialog();
  }

  handleOnAboutClick = () => {
    this.toggleAboutDialog();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="content">
            <Route exact={ROUTES.subscribeComponent.exact} path={ROUTES.subscribeComponent.path} component={SubscribeComponent}/>
            <Route exact={ROUTES.aboutComponent.exact} path={ROUTES.aboutComponent.path} component={AboutComponent}/>
            <Route exact={ROUTES.photosComponent.exact} path={ROUTES.photosComponent.path} component={PhotosComponent}/>
            <Route exact path={'/off'} render={() => {
              return (
                <div>Parece que você esta offline</div>
              )
            }}/>
          </div>
          <Footer size="mini" className="footer">
            <FooterSection type="left">
              <FooterLinkList>
                <span>© 2017 Pousada Caminho dos Ventos</span>
              </FooterLinkList>
            </FooterSection>
            <FooterSection type="right">
              <FooterLinkList>
                <a onClick={this.handleOnContactClick} href="#">{strings.footerContact}</a>
                <a onClick={this.handleOnAboutClick} href="#">{strings.footerAbout}</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
          <AboutDialog ref={aboutDialog => this.toggleAboutDialog = aboutDialog.handleToggle}/>
          <ContactDialog ref={contactDialog => this.toggleContactDialog = contactDialog.handleToggle}/>
        </div>
      </Router>
    )
  }
}

document.title = strings.pageTitle;

render(
  <App/>, document.getElementById('root'));
