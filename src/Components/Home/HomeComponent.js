import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import BannerComponent from '../Banner/BannerComponent';
import AboutComponent from '../About/AboutComponent';
import FooterComponent from '../Footer/FooterComponent';
import Mountain1Icon from '../svg/Mountain1Icon';
import ContactFormComponent from '../ContactForm/ContactFormComponent';
import { URLS } from '../../routes';
import '../../assets/scss/Home.css';

import { translate } from 'react-i18next';

class HomeComponent extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
  };

  componentDidMount() {
    const { t } = this.props;
    document.title = t('homePageTitle');
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  renderContact() {
    const { t } = this.props;

    const cls = {
      contact: 'home-contact full-height-page',
      contactBg: 'home-contact__background',
      contactBgSvg: 'home-contact__background__svg',
      contactFormTitle: 'home-contact__title',
      contactFormTitleText: 'home-contact__title__text',
      contactFormSubtitle: 'home-contact__subtitle',
      contactFormSubtitleText: 'home-contact__subtitle__text',
      contactForm: 'home-contact__form',
      inputField: 'flat-input flat-input--full-width',
      textAreaField: 'flat-text-area flat-text-area--full-width',
      submitButton: 'flat-button flat-button--full-width flat-button--green-500',
    };

    return (
      <section className={cls.contact} id="contact">
        <div className={cls.contactBg}>
          <Mountain1Icon className={cls.contactBgSvg} />
        </div>
        <ContactFormComponent
          className={cls.contactForm}
          classNameTitle={cls.contactFormTitle}
          classNameTitleText={cls.contactFormTitleText}
          classNameSubtitle={cls.contactFormSubtitle}
          classNameSubtitleText={cls.contactFormSubtitleText}
          title={t('contactFormTitle')}
          subtitle={t('contactFormSubtitle')}
        />
      </section>
    )
  }

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <BannerComponent />
        <AboutComponent />
        {this.renderContact()}
        <FooterComponent
          navMapItems={[
            { text: t('footerMapAbout'), ref: '#about' },
            { text: t('footerMapContact'), ref: '#contact' },
          ]}
          pageMapItems={[
            { text: t('footerMapMoreInfo'), url: URLS.moreInfo() },
            { text: t('footerMapPhotos'), url: URLS.photos() },
            { text: t('footerMapBookARoom'), url: URLS.bookARoom() },
          ]}
        />
      </Fragment>
    )
  }
}

export default translate('translations')(HomeComponent);
