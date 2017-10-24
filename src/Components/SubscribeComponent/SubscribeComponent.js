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
  static DBSubmittedFormField = '__pcv_submitted_form';

  constructor(props) {
    super(props);
    this.state = {
      submittedForm: false,
      submittingForm: false
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    if (typeof(Storage) !== "undefined") {
      let submittedForm = JSON.parse(localStorage.getItem(SubscribeComponent.DBSubmittedFormField));
      this.setState({submittedForm})
    }
  }

  handleSubscribeFormSubmit = (e) => {
    this.setState({submittingForm: true})
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(SubscribeComponent.DBSubmittedFormField, true);
    }
  }

  handleReSubmitForm = () => {
    this.setState({submittedForm: false})
  }

  renderForm = () => {
    const {submittedForm, submittingForm} = this.state;
    if (submittedForm)
      return (
        <div className="main-card-submitted">
          <p>{strings.formSubmitted}</p>
          <div>
            <button onClick={this.handleReSubmitForm}>{strings.subscribeOtherEmail}</button>
          </div>
        </div>
      )
    else {
      return (
        <form disabled={submittingForm} action="//fcgomes.us15.list-manage.com/subscribe/post?u=fb12072c078d8ca3077e4ae8f&amp;id=658fc05e91" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" onSubmit={this.handleSubscribeFormSubmit}>
          <div>
            <div className="main-card-info">
              {strings.info}
            </div>
            <div className="main-card-inputs">
              <div className="main-card-input">
                <input disabled={submittingForm} placeholder={strings.textFieldEmailLabel} required onChange={() => {}} type="email" name="EMAIL"/>
              </div>
              <div className="main-card-input">
                <input disabled={submittingForm} placeholder={strings.textFieldFirstNameLabel} onChange={() => {}} type="text" name="FNAME"/>
              </div>
              <div className="main-card-input">
                <input disabled={submittingForm} placeholder={strings.textFieldLastNameLabel} onChange={() => {}} type="text" name="LNAME"/>
              </div>
              <button type="submit" form="mc-embedded-subscribe-form">{strings.subscribe}</button>
            </div>
            <Loader show={submittingForm} size="5em"/>
          </div>
        </form>
      )
    }
  };

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
            {this.renderForm()}
          </div>
          <div className="main-card-actions">
            <Link to={ROUTES.aboutComponent.path}>
              <button>{strings.readMore}</button>
            </Link>
            <Link to={ROUTES.photosComponent.path}>
              <button>{strings.photosText}</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SubscribeComponent;
