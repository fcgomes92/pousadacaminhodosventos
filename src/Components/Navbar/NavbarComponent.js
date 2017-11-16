import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {translate} from 'react-i18next';

import {NavLink} from 'react-router-dom';

import {URLS} from '../../routes';
import '../../assets/scss/Navbar.css';

class NavbarComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    render() {
        const {t} = this.props;

        const cls = {
            nav: 'navbar navbar--shadow-true',
            navLinks: 'navbar__links navbar__links--show-only-large',
            navLink: 'navbar__links__link',
            navLinkText: 'navbar__links__link__text',
            navLinkSelected: 'navbar__links__link--selected',
        };

        return (
            <nav className={cls.nav}>
                <div className={cls.navLinks}>
                    <NavLink exact className={cls.navLink} activeClassName={cls.navLinkSelected} to={URLS.base()}>
                        <span className={cls.navLinkText}>{t('navbarHome')}</span>
                    </NavLink>
                    <NavLink exact className={cls.navLink} activeClassName={cls.navLinkSelected} to={URLS.about()}>
                        <span className={cls.navLinkText}>{t('navbarAbout')}</span>
                    </NavLink>
                    <NavLink exact className={cls.navLink} activeClassName={cls.navLinkSelected} to={URLS.photos()}>
                        <span className={cls.navLinkText}>{t('navbarPhotos')}</span>
                    </NavLink>
                </div>
            </nav>
        )
    }
}

export default translate('translations')(NavbarComponent);
