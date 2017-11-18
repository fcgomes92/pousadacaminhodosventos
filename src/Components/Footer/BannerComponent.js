import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import classNames from 'classnames';

import '../../assets/scss/BannerHeader.css';
import {translate} from 'react-i18next';

class BannerComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    render() {
        const {t} = this.props;

        const cls = {
            bannerHeader: 'banner-header',
        };

        return (
            <section className={cls.bannerHeader}>
            </section>
        )
    }
}

export default translate('translations')(BannerComponent);
