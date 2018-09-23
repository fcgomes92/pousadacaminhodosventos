import React, { Component } from 'react';

import classNames from 'classnames';

import { translate } from 'react-i18next';

import '../../assets/scss/CTABar.css';

class CTABarComponent extends Component {
  state = {
    show: true,
  };

  handleOnClick = () => {
    if (typeof window !== 'undefined') {
      const { t } = this.props;
      let w = window.open(t('navbarTourLink'));
      w.focus();
    }
  };

  handleClose = () => this.setState({ show: false });

  render() {
    const { t } = this.props;

    const cls = {
      ctaBar: classNames('cta-bar', {
        'cta-bar--show': this.state.show,
      }),
      text: 'cta-bar__text',
      close: 'cta-bar__close ion-close',
    };
    return (
      <div className={cls.ctaBar}>
        <div className={cls.text} onClick={this.handleOnClick}>{t('ctaBarText')}</div>
        <div className={cls.close} onClick={this.handleClose} />
      </div>
    )
  }
}

export default translate('translations')(CTABarComponent);