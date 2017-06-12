import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ImageComponent extends Component {
  static propTypes = {
    src: PropTypes.string,
    style: PropTypes.object,
    loadingElement: PropTypes.element,
    afterLoading: PropTypes.func,
    imageProps: PropTypes.object,
    wrapperProps: PropTypes.object
  }

  static defaultProps = {
    imageProps: {},
    wrapperProps: {}
  }

  state = {
    loaded: false
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.src !== this.props.src) {
      this.setState({loaded: false});
    }
  }

  handleImageLoaded = (e) => {
    this.setState({loaded: true});
    if (this.props.afterLoading)
      this.props.afterLoading();
    };

  handleImageErrored = (e) => {
    this.setState({loaded: true});
  };

  renderSpinner() {
    if (this.state.loaded) {
      return null;
    } else {
      return this.props.loadingElement
    }
  }

  render() {
    return (
      <div {...this.props.wrapperProps}>
        {this.renderSpinner()}
        <img {...this.props.imageProps} src={this.props.src} onLoad={this.handleImageLoaded} onError={this.handleImageErrored}/>
      </div>
    )
  }
}

export default ImageComponent;
