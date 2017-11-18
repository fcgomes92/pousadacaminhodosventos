import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavbarComponent from '../Navbar/NavbarComponent';

import {translate} from 'react-i18next';

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
        return (
            <main>
                <NavbarComponent/>
            </main>
        )
    }
}

export default translate('translations')(PhotosComponent);
