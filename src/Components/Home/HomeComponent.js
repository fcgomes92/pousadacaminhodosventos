import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {translate} from 'react-i18next';

import NavbarComponent from '../Navbar/NavbarComponent';

class HomeComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    componentDidMount() {
        const {t} = this.props;
        document.title = t('homePageTitle');
    }

    render() {
        return (
            <main>
                <NavbarComponent/>
            </main>
        )
    }
}

export default translate('translations')(HomeComponent);
