import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {translate} from 'react-i18next';

import NavbarComponent from '../Navbar/NavbarComponent';
import SimpleBannerComponent from '../SimpleBanner/SimpleBannerComponent';
import FooterComponent from "../Footer/FooterComponent";
import {URLS} from "../../routes";

class PhotosComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    componentDidMount() {
        const {t} = this.props;
        document.title = t('pageTitle', {page: t('photosPageTitle')});
        window.scrollTo(0,0);
    }

    render() {
        const {t} = this.props;

        return (
            <main>
                <NavbarComponent/>
                <SimpleBannerComponent upperText={t('photosBannerTitle1')} lowerText={t('photosBannerTitle2')}/>
                <FooterComponent
                    pageMapItems={[
                        {text: t("footerMapHome"), url: URLS.base()},
                        {text: t("footerMapMoreInfo"), url: URLS.moreInfo()},
                    ]}/>
            </main>
        )
    }
}

export default translate('translations')(PhotosComponent);
