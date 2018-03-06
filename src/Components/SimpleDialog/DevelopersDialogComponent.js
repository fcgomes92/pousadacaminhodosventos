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

class DevelopersDialogComponent extends SimpleDialogComponent {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    renderContent() {
        const {t} = this.props;
        return (
            <CardComponent>
                <CardTitleComponent primaryText={t('title')} secondaryText={t('title')}/>
                <CardMediaComponent/>
                <CardContentComponent/>
                <CardActionsComponent/>
            </CardComponent>
        );
    }
}

export default translate('translations')(DevelopersDialogComponent);