import React, {Component} from 'react';
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
import {Link} from 'react-router-dom';
import './SubscribeComponent.css';
import {ROUTES} from '../../routes';
import s from '../../strings';
import gomeira from '../../imgs/gomeira.jpg';
import gomeiraSmall from '../../imgs/gomeira-small.jpg';

const strings = s.strings.subscribeComponent;

class SubscribeComponent extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  renderForm = () => {
    return (
      <form action="//fcgomes.us15.list-manage.com/subscribe/post?u=fb12072c078d8ca3077e4ae8f&amp;id=658fc05e91" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
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
          <CardText>
            {this.renderForm()}
          </CardText>
          <CardActions border>
            <Button type="submit" colored>{strings.subscribe}</Button>
            <Link to={ROUTES.aboutComponent.path}>
              <Button colored>{strings.readMore}</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default SubscribeComponent;
