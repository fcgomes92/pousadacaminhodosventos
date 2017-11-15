import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SubscribeComponent.css';
import Loader from '../Loader/LoaderComponent';
import {ROUTES} from '../../routes';
import s from '../../strings';
import gomeira from '../../imgs/gomeira.jpg';
import gomeiraSmall from '../../imgs/gomeira-small.jpg';

const strings = s.strings.subscribeComponent;

class SubscribeComponent extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let cardBGImage = window.innerWidth > 700
      ? gomeira
      : gomeiraSmall;
    return (
      <div>
        <div className="main-card" style={{
          width: '100%',
          margin: 'auto'
        }}>
          <div className="main-card-header-image" style={{
            background: `url(${cardBGImage}) center / cover`
          }}>
            <span>{strings.cardTitle}</span>
          </div>
          <div className="main-card-content" style={{
            margin: 'auto'
          }}>
            <p>{strings.info}</p>
          </div>
          <div className="main-card-actions">
            <Link to={ROUTES.aboutComponent.path}>
              <button>{strings.readMore}</button>
            </Link>
            <Link to={ROUTES.photosComponent.path}>
              <button>{strings.photosText}</button>
            </Link>
            <button onClick={this.props.contactCallback}>{strings.contactButton}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SubscribeComponent;
