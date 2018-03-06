import React from 'react';

import PropTypes from 'prop-types';

import {translate} from "react-i18next";

import SimpleDialogComponent from './SimpleDialogComponent';
import {
    CardActionsComponent,
    CardComponent,
    CardContentComponent,
    CardMediaComponent,
    CardTitleComponent
} from "../Card/CardComponent";
import Logo from '../../assets/imgs/logo.jpeg';

class DevelopersDialogComponent extends SimpleDialogComponent {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    renderContent() {
        const {t} = this.props;

        const cls = {
            actionButton: 'flat-button flat-button--transparent'
        };

        return (
            <CardComponent>
                <CardTitleComponent primaryText={t('developersDialogPrimaryTitle')}
                                    secondaryText={t('developersDialogSecondaryTitle')}/>
                <CardMediaComponent srcImg={Logo}/>
                <CardContentComponent>
                    <ul>
                        <li><a href="htpps://github.com/fcgomes92" target="_blank" rel="noopener">GITHUB</a></li>
                        <li><a href="htpps://linkedin.com/fcgomes92" target="_blank" rel="noopener">SITE</a></li>
                        <li><a href="https://fcgomes.com" target="_blank" rel="noopener">SITE</a></li>
                    </ul>
                </CardContentComponent>
                <CardActionsComponent>
                    <button className={cls.actionButton}
                            onClick={this.handleOnRequestClose}>{t('close')}
                    </button>
                </CardActionsComponent>
            </CardComponent>
        );
    }
}

export default translate('translations')(DevelopersDialogComponent);