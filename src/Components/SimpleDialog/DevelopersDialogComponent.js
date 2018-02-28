import React from 'react';

import {translate} from "react-i18next";

import SimpleDialogComponent from './SimpleDialogComponent';

class DevelopersDialogComponent extends SimpleDialogComponent {
    renderContent(){
        return "TTT";
    }
}

export default translate('translations')(DevelopersDialogComponent);