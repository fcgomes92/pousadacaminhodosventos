import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import {translate} from 'react-i18next';

import '../../assets/scss/Footer.css';

class FooterComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
        pageMapItems: PropTypes.array,
        navMapItems: PropTypes.array,
    };

    static defaultProps = {
        pageMapItems: [],
        navMapItems: [],
    };

    renderNavMapItems(cls) {
        const {navMapItems} = this.props;
        if (navMapItems.length === 0) {
            return null;
        } else {
            return (
                <div className={cls.footerMap}>{navMapItems.map((item, idx) => {
                    return (
                        <div className={cls.footerMapItem} key={`__page-map-item-${idx}`}>
                            <a href={item.ref} className={cls.footerMapItemText}>
                                {item.text}
                            </a>
                        </div>
                    );
                })}</div>
            )
        }
    }

    renderPageMapItems(cls) {
        const {pageMapItems} = this.props;
        if (pageMapItems.length === 0) {
            return null;
        } else {
            return (
                <div className={cls.footerMap}>
                    {pageMapItems.map((item, idx) => {
                        return (
                            <div className={cls.footerMapItem} key={`__page-map-item-${idx}`}>
                                <Link to={item.url} className={cls.footerMapItemText}>
                                    {item.text}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )
        }
    }

    render() {
        const {pageMapItems, navMapItems} = this.props;
        const cls = {
            footer: 'footer',
            footerMap: 'footer__map',
            footerMapItem: 'footer__map__item',
            footerMapItemText: 'footer__map__item__text link link--brown-500',
            footerDev: 'footer__dev',
            footerDevCopyright: 'footer__dev__copyright',
            divider: 'divider divider--green-700'
        };

        return (
            <footer className={cls.footer} id="footer">
                {this.renderNavMapItems(cls)}
                {this.renderPageMapItems(cls)}
                {/*{this.renderPageMapItems(cls)}*/}
                <div className={cls.footerDev}>
                    <div className={cls.footerDevCopyright}>&#169;&nbsp;2017 Pousada Caminho dos Ventos</div>
                </div>
            </footer>
        )
    }
}

export default translate("translations")(FooterComponent);