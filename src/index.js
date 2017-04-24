import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Textfield,
  Grid,
  Cell
} from 'react-mdl';
import 'react-mdl/extra/css/material.green-teal.min.css';
import 'react-mdl/extra/material.js';
import './index.css';
import s from './strings';
import gomeira from './imgs/gomeira.jpg';

const strings = s.strings.app;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
  }

  handleFormSubmit = () => {
    this.setState({submitted: true})
  };

  renderSubmittedFormInfo = () => {
    return (
      <Grid>
        <Cell col={12}>
          {strings.infoSubmitted}
        </Cell>
      </Grid>
    )
  };

  renderUnsubmittedFormInfo = () => {
    return (
      <Grid>
        <Cell col={12}>
          {strings.info}
        </Cell>
        <Cell col={12}>
          <div>
            <Textfield floatingLabel label={strings.textFieldEmailLabel} required onChange={() => {}} type="email" name="EMAIL"/>
          </div>
          <div>
            <Textfield floatingLabel label={strings.textFieldFirstNameLabel} onChange={() => {}} type="text" name="FNAME"/>
          </div>
          <div>
            <Textfield floatingLabel label={strings.textFieldLastNameLabel} onChange={() => {}} type="text" name="LNAME"/>
          </div>
        </Cell>
      </Grid>
    )
  };

  renderCardText = () => {
    return this.state.submitted
      ? this.renderSubmittedFormInfo()
      : this.renderUnsubmittedFormInfo();
  };

  renderCardActions = () => {
    return this.state.submitted
      ? null
      : <Button type="submit" colored>{strings.subscribe}</Button>;
  }

  render() {
    return (
      <div>
        <form action="//fcgomes.us15.list-manage.com/subscribe/post?u=fb12072c078d8ca3077e4ae8f&amp;id=658fc05e91" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
          <Card shadow={2} style={{
	    width: '100%',
            margin: 'auto'
          }}>
            <CardTitle style={{
              color: '#fff',
              height: '176px',
              background: `url(${gomeira}) center / cover`
            }}>{strings.cardTitle}</CardTitle>
            <CardText>
              {this.renderCardText()}
            </CardText>
            <CardActions border={!this.state.submitted}>
              {this.renderCardActions()}
            </CardActions>
          </Card>
        </form>
      </div>
    )
  }
}

document.title = strings.pageTitle;

render(
  <App/>, document.getElementById('root'));
