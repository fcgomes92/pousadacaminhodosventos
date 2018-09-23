import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MapsIFrameComponent extends Component {
  static propTypes = {
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    className: '',
    title: '',
    id: 'mapsIFrameId',
  };

  render() {
    const { title, id, className } = this.props;

    return (
      <iframe
        title={title}
        id={id}
        className={className}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236075.4523113462!2d-45.09561493674635!3d-22.403457709491104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9dff002e82d8ab%3A0x428c149595ba0f95!2sPassa+Quatro+-+State+of+Minas+Gerais!5e0!3m2!1sen!2sbr!4v1493347536178"
        frameBorder="0"
        allowFullScreen
      />
    )
  }
}

export default MapsIFrameComponent;
