import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

import '../../assets/scss/ContactThanks.css';
import NavbarComponent from '../Navbar/NavbarComponent';
import SimplePageMessageComponent from '../SimplePageMessage/SimplePageMessageComponent';
import BikeMountainIcon from '../svg/BikeMountainIcon';

class ContactThanksComponent extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
  };

  componentDidMount() {
    const { t } = this.props;
    document.title = t('pageTitle', { page: t('contactThanksPageTitle') });
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { t } = this.props;

    const cls = {
      pageMessage: 'full-height-page contact-thanks',
      pageMessageBg: 'contact-thanks__bg',
      pageMessageText: 'contact-thanks__text',
      title: 'contact-thanks__title',
      titleText: 'contact-thanks__title__text',
      subtitle: 'contact-thanks__subtitle',
      subtitleText: 'contact-thanks__subtitle__text',
    };

    return (
      <main>
        <NavbarComponent />
        <div className={cls.pageMessage}>
          <BikeMountainIcon className={cls.pageMessageBg} />
          <SimplePageMessageComponent
            className={cls.pageMessageText}
            title={
              <div className={cls.title}>
                <span className={cls.titleText}>{t('contactThanksTitle')}</span>
              </div>
            }
            subtitle={
              <div className={cls.subtitle}>
                <span className={cls.subtitleText}>{t('contactThanksSubtitle')}</span>
              </div>
            }
          />
        </div>
      </main>
    )
  }
}

export default translate('translations')(ContactThanksComponent);