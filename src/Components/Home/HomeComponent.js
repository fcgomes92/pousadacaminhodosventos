import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BannerComponent from '../Banner/BannerComponent';
import AboutComponent from '../About/AboutComponent';
import NavbarComponent from '../Navbar/NavbarComponent';
import ContactComponent from '../Contact/ContactComponent';
import FooterComponent from "../Footer/FooterComponent";
import {URLS} from "../../routes";

import {translate} from 'react-i18next';

class HomeComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    componentDidMount() {
        const {t} = this.props;
        document.title = t('homePageTitle');
        window.scrollTo(0, 0);
    }

    render() {
        const {t} = this.props;

        return (
            <main>
                <NavbarComponent/>
                <BannerComponent/>
                <AboutComponent/>
                <ContactComponent/>
                <FooterComponent
                    navMapItems={[
                        {text: t("footerMapAbout"), ref: "#about"},
                        {text: t("footerMapContact"), ref: "#contact"},
                    ]}
                    pageMapItems={[
                        {text: t("footerMapMoreInfo"), url: URLS.moreInfo()},
                        {text: t("footerMapPhotos"), url: URLS.photos()},
                    ]}/>
            </main>
        )
    }
}

export default translate('translations')(HomeComponent);
