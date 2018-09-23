import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/Loading.css';

import classNames from 'classnames';

class LoadingComponent extends Component {
  static propTypes = {
    size: PropTypes.string,
    show: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    width: '2em',
    height: '2em',
    classNames: '',
    show: true,
  };

  render() {
    const cls = classNames('loader', this.props.className);
    if (!this.props.pastDelay) return null;
    return (<div
      className={cls} style={{
      display: this.props.show
        ? 'block'
        : 'none',
      width: this.props.size,
      height: this.props.size,
    }}
    />);
  }
}

export default LoadingComponent;
