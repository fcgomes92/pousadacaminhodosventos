import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/Loader.css';

import classNames from 'classnames';

class Loader extends Component {
  static propTypes = {
    size: PropTypes.string,
    show: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };

  static defaultProps = {
    width: '2em',
    height: '2em',
    classNames: "",
    show: true,
  };

  render() {
    const cls = classNames("loader", this.props.className);
    return (<div className={cls} style={{
      display: this.props.show
        ? 'block'
        : 'none',
      width: this.props.size,
      height: this.props.size
    }}/>)
  }
}

export default Loader;
