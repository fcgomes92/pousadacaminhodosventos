import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SimplePageMessageComponent extends Component {
  static propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    texts: PropTypes.array,
  };

  static defaultProps = {
    className: '',
    title: null,
    subtitle: null,
    texts: [],
  };

  render() {
    const { title, subtitle, texts, className } = this.props;
    return (
      <div className={className}>
        {title ? title : null}
        {subtitle ? subtitle : null}
        {texts ? texts : null}
      </div>
    )
  }
}