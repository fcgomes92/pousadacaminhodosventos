import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {translate} from 'react-i18next';

class NotFoundComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    render() {
        return (
            <main>
                404!
            </main>
        )
    }
}

export default translate('translations')(NotFoundComponent);
