import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import '../../assets/scss/SimpleBanner.css';

class SimpleBannerComponent extends Component {
    static propTypes = {
        classNameBanner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        classNameBannerTitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        classNameBannerTitleUpperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        classNameBannerTitleLowerText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        upperText: PropTypes.string,
        lowerText: PropTypes.string,
    };

    static defaultProps = {
        classNameBanner: "",
        classNameBannerTitle: "",
        classNameBannerTitleUpperText: "",
        classNameBannerTitleLowerText: "",
        upperText: "",
        lowerText: "",
    };

    render() {
        const {
            classNameBanner,
            classNameBannerTitle,
            classNameBannerTitleUpperText,
            classNameBannerTitleLowerText,
            upperText,
            lowerText,
        } = this.props;

        const cls = {
            banner: classNames('simple-banner', classNameBanner),
            bannerOverlay: 'simple-banner__overlay',
            bannerTitle: classNames('simple-banner__title', classNameBannerTitle),
            bannerTitleTextLight: classNames('simple-banner__title__text simple-banner__title__text--light animated fadeInUp', classNameBannerTitleUpperText),
            bannerSmallTitleText: classNames('simple-banner__title__text simple-banner__title__text--small animated fadeInDown', classNameBannerTitleLowerText),
        };

        return (
            <section className={cls.banner} id={"banner"}>
                <div className={cls.bannerOverlay}/>
                <div className={cls.bannerTitle}>
                    <span className={cls.bannerSmallTitleText}>{upperText}</span>
                    <span className={cls.bannerTitleTextLight}>{lowerText}</span>
                </div>
            </section>
        )
    }
}

export default SimpleBannerComponent;
