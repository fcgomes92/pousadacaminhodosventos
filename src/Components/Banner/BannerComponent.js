import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {translate} from 'react-i18next';

import '../../assets/scss/BannerHeader.css';
import ScrollToTheEndComponent from '../ScrollToTheEnd/ScrollToTheEndComponent';

class BannerComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    state = {
        section: null,
    };


    handleSectionRef = (ref) => {
        if (ref) {
            this.setState({section: ref});
        }
    };

    render() {
        const {t} = this.props;

        const cls = {
            bannerHeader: 'banner-header full-height-page',
            bannerHeaderOverlay: 'banner-header__overlay',
            bannerHeaderScroll: 'banner-header__scroll',
            bannerHeaderTitle: 'banner-header__title',
            bannerHeaderTitleTextThick: 'banner-header__title__text banner-header__title__text--thick animated fadeInDown',
            bannerHeaderTitleTextLight: 'banner-header__title__text banner-header__title__text--light animated fadeInUp',
            bannerHeaderSmallTitleText: 'banner-header__title__text banner-header__title__text--small animated fadeInUp',
            bannerScrollButton: 'flat-button flat-button--round animated pulse infinite',
        };

        return (
            <section className={cls.bannerHeader} ref={this.handleSectionRef} id={"banner"}>
                <div className={cls.bannerHeaderOverlay}/>
                <div className={cls.bannerHeaderTitle}>
                    <span className={cls.bannerHeaderTitleTextThick}>{t('bannerHeaderTitle1')}</span>
                    <span className={cls.bannerHeaderTitleTextLight}>{t('bannerHeaderTitle2')}</span>
                    <span className={cls.bannerHeaderSmallTitleText}>{t('bannerHeaderTitle3')}</span>
                </div>
                <div className={cls.bannerHeaderScroll}>
                    <ScrollToTheEndComponent element={this.state.section}>
                        <button className={cls.bannerScrollButton}>
                            <i className="material-icons">&#xE313;</i>
                        </button>
                    </ScrollToTheEndComponent>
                </div>
            </section>
        )
    }
}

export default translate('translations')(BannerComponent);
