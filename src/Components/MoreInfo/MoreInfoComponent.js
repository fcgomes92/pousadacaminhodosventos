import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import NavbarComponent from '../Navbar/NavbarComponent';
import SimpleBannerComponent from '../SimpleBanner/SimpleBannerComponent';
import MapsIFrameComponent from '../MapsIFrame/MapsIFrameComponent';
import FooterComponent from '../Footer/FooterComponent';
import '../../assets/scss/MoreInfo.css';
import { URLS } from '../../routes';

import { translate } from 'react-i18next';
import BikeMountainIcon from '../svg/BikeMountainIcon';

class MoreInfoComponent extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
  };

  componentDidMount() {
    const { t } = this.props;
    document.title = t('pageTitle', { page: t('moreInfoPageTitle') });
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  renderTextMapSection() {
    const { t } = this.props;

    const cls = {
      textMap: 'text-map full-height-page',
      textMapTextBlock: 'text-map__text-block',
      textMapTextBlockTextBg: 'text-map__text-block__bg',
      textMapTextBlockTextBgSvg: 'text-map__text-block__bg__svg',
      textMapTextBlockText: 'text-map__text-block__text',
      textMapTextBlockTitle: 'text-map__text-block__title',
      textMapTextBlockTitleText: 'text-map__text-block__title__text',
      textMapTextBlockSubtitle: 'text-map__text-block__subtitle',
      textMapTextBlockSubtitleText: 'text-map__text-block__subtitle__text',
      textMapMapBlock: 'text-map__map-block',
      textMapTextBlockCTABtn: 'text-map__text-block__cta-btn',
      ctaBtn: 'link link--button link--button--green-500',
    };

    return (
      <section className={cls.textMap} id="about">
        <div className={cls.textMapTextBlock}>
          <div className={cls.textMapTextBlockTextBg}>
            <BikeMountainIcon className={cls.textMapTextBlockTextBgSvg} />
          </div>
          <div className={cls.textMapTextBlockTitle}>
            <span className={cls.textMapTextBlockTitleText}>{t('moreInfoTextMapTitle')}</span>
          </div>
          <div className={cls.textMapTextBlockText}>
            <p>{t('moreInfoTextMapText1')}</p>
            <p>{t('moreInfoTextMapText2')}</p>
            <p>{t('moreInfoTextMapText3')}</p>
          </div>
          <div className={cls.textMapTextBlockCTABtn}>
            <Link to={URLS.bookARoom()} className={cls.ctaBtn}>
              <span>{t('bookARoom')}</span>
            </Link>
          </div>
        </div>
        <MapsIFrameComponent className={cls.textMapMapBlock} />
      </section>
    )
  }

  render() {
    const { t } = this.props;

    return (
      <main>
        <NavbarComponent />
        <SimpleBannerComponent upperText={t('moreInfoBannerTitle1')} lowerText={t('moreInfoBannerTitle2')} />
        {this.renderTextMapSection()}
        <FooterComponent
          pageMapItems={[
            { text: t('footerMapHome'), url: URLS.base() },
            { text: t('footerMapPhotos'), url: URLS.photos() },
            { text: t('footerMapBookARoom'), url: URLS.bookARoom() },
          ]}
        />
      </main>
    )
  }
}

export default translate('translations')(MoreInfoComponent);
