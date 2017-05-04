import React, {Component} from 'react';
import {Button, Spinner} from 'react-mdl';
import {Link} from 'react-router-dom';
import './AboutComponent.css';
import {ROUTES} from '../../routes';
import s from '../../strings';
import {checkIframeLoaded} from '../../util';

const strings = s.strings.aboutComponent;

class AboutComponent extends Component {
  static idMapsIFrame = 'idMapsIFrame';

  constructor(props) {
    super(props);
    this.state = {
      mapsIFrameLoaded: false
    }
  }

  componentDidMount() {

  }

  componentWillMount() {
    window.scrollTo(0, 0);
    checkIframeLoaded(AboutComponent.idMapsIFrame, this.handleMapsIFrameLoaded);
  }

  handleMapsIFrameLoaded = () => {
    this.setState({mapsIFrameLoaded: true})
  }

  renderMapsIFrame = () => {
    if (!this.state.mapsIFrameLoaded)
      return <Spinner singleColor/>
  }

  render() {
    const styles = {
      title: {
        textAlign: 'center'
      },
      actions: {
        textAlign: 'center'
      }
    }
    return (
      <div>
        <h2 style={styles.title}>{strings.aboutTitle}</h2>
        <div className="texts">
          <p className="about-text">
            {strings.aboutText}
          </p>

          <div className="map">
            {this.renderMapsIFrame()}
            <iframe id={AboutComponent.idMapsIFrame} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236075.4523113462!2d-45.09561493674635!3d-22.403457709491104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9dff002e82d8ab%3A0x428c149595ba0f95!2sPassa+Quatro+-+State+of+Minas+Gerais!5e0!3m2!1sen!2sbr!4v1493347536178" height="100%" frameBorder="0" allowFullScreen></iframe>
          </div>

          <p className="call-text">
            {strings.callText}
          </p>

          <div style={styles.actions}>
            <Link to={ROUTES.subscribeComponent.path}>
              <Button colored>{strings.returnText}</Button>
            </Link>
            <Link to={ROUTES.photosComponent.path}>
              <Button colored>{strings.photosText}</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutComponent;
