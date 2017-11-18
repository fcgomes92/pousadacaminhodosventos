import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BannerComponent from '../Banner/BannerComponent';
import AboutComponent from '../About/AboutComponent';
import NavbarComponent from '../Navbar/NavbarComponent';

import {translate} from 'react-i18next';

class HomeComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    componentDidMount() {
        const {t} = this.props;
        document.title = t('homePageTitle');
        window.scrollTo(0,0);
    }

    render() {
        return (
            <main>
                <NavbarComponent/>
                <BannerComponent/>
                <AboutComponent/>
            </main>
        )
    }
}

export default translate('translations')(HomeComponent);
