import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import '../../assets/scss/SimpleDialog.css';

class SimpleDialogComponent extends React.Component {
    static propTypes = {
        open: PropTypes.bool,
        onRequestClose: PropTypes.func,
    };

    static defaultProps = {
        open: false,
    };

    handleOnRequestClose = () => {
        const {onRequestClose} = this.props;
        if (onRequestClose) {
            onRequestClose();
        }
    };

    renderContent() {
        return null;
    }

    render() {
        const {open} = this.props;

        const cls = {
            simpleDialog: classNames('simple-dialog', {'show': open}),
            simpleDialogOverlay: 'simple-dialog__overlay',
            simpleDialogContent: 'simple-dialog__content',
        };

        return (
            <div className={cls.simpleDialog}
                 onClick={this.handleOnRequestClose}>
                <div className={cls.simpleDialogContent}
                     onClick={this.handleOnRequestClose}>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default SimpleDialogComponent;
