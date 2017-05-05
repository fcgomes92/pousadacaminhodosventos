import React, {Component} from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Textfield,
  Grid,
  Cell,
  Spinner
} from 'react-mdl';
import {Link} from 'react-router-dom';
import './SubscribeComponent.css';
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
    const styles = {
      spinnerWrapper: {
        transition: 'opacity 250ms ease',
        margin: '0',
        width: submittingForm
          ? '100%'
          : '0'
      },
      spinner: {
        transition: 'opacity 250ms ease',
        opacity: submittingForm
          ? '1'
          : '0'
      }
    }
    if (submittedForm)
      return (
        <div>
        <Grid>
          <Cell col={12}>
            <p>{strings.formSubmitted}</p>
          </Cell>
          <Cell col={12}>
            <Button colored onClick={this.handleReSubmitForm}>{strings.subscribeOtherEmail}</Button>
          </Cell>
        </Grid>
      </div>
      )
    else
      return (
        <form disabled={submittingForm} action="//fcgomes.us15.list-manage.com/subscribe/post?u=fb12072c078d8ca3077e4ae8f&amp;id=658fc05e91" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" onSubmit={this.handleSubscribeFormSubmit}>
          <Grid>
            <Cell col={12}>
              {strings.info}
            </Cell>
            <Cell col={12}>
              <div>
                <Textfield disabled={submittingForm} floatingLabel label={strings.textFieldEmailLabel} required onChange={() => {}} type="email" name="EMAIL"/>
              </div>
              <div>
                <Textfield disabled={submittingForm} floatingLabel label={strings.textFieldFirstNameLabel} onChange={() => {}} type="text" name="FNAME"/>
              </div>
              <div>
                <Textfield disabled={submittingForm} floatingLabel label={strings.textFieldLastNameLabel} onChange={() => {}} type="text" name="LNAME"/>
              </div>
              <Button type="submit" form="mc-embedded-subscribe-form" colored>{strings.subscribe}</Button>
            </Cell>
            <Cell col={12} style={styles.spinnerWrapper}>
              <Spinner style={styles.spinner}/>
            </Cell>
          </Grid>
        </form>
      )
  };

  render() {
    let cardBGImage = window.innerWidth > 700
      ? gomeira
      : gomeiraSmall;
    return (
      <div>
        <Card className="main-card" shadow={2} style={{
          width: '100%',
          margin: 'auto'
        }}>
          <CardTitle style={{
            color: '#fff',
            height: '176px',
            background: `url(${cardBGImage}) center / cover`
          }}>{strings.cardTitle}</CardTitle>
        <CardText style={{margin: 'auto'}}>
            {this.renderForm()}
          </CardText>
          <CardActions border>
            <Link to={ROUTES.aboutComponent.path}>
              <Button colored>{strings.readMore}</Button>
            </Link>
            <Link to={ROUTES.photosComponent.path}>
              <Button colored>{strings.photosText}</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default SubscribeComponent;
