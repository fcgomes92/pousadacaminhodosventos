import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Dialog.css';
import classNames from 'classnames';

class DialogTitle extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const {children} = this.props;
    return (
      <div className="_dialog_title">{children}</div>
    )
  }
}

class DialogContent extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const {children, className} = this.props;
    const clsName = classNames(className, {
      '_dialog_content': true,
    })
    return (
      <div className={clsName}>{children}</div>
    )
  }
}

class DialogActions extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    const {children} = this.props;
    return (
      <div className="_dialog_actions">{children}</div>
    )
  }
}

class Dialog extends Component {
  static propTypes = {
    modal: PropTypes.bool,
    className: PropTypes.string,
    classNameDialog: PropTypes.string,
    classNameDialogBG: PropTypes.string,
    style: PropTypes.object,
    styleDialog: PropTypes.object,
    styleDialogBG: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    modal: false,
    className: "",
    classNameDialog: "",
    classNameDialogBG: "",
    style: {},
    styleDialog: {},
    styleDialogBG: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      previousKeyUp: null
    };
  }

  _hookupKeyUp = (open) => {
    let newKeyUp;
    if (open) {
      newKeyUp = window.onkeyup;
      window.onkeyup = (e) => {
        let key = e.keyCode
          ? e.keyCode
          : e.which;
        // escape key === 27
        if (key === 27) {
          this.handleToggle()
        }
      }
    } else {
      newKeyUp = null;
      window.onkeyup = this.state.previousKeyUp;
    }
    return newKeyUp;
  }

  handleToggle = () => {
    const {open} = this.state;

    let newKeyUp = this._hookupKeyUp(!open);

    this.setState({
      open: !open,
      previousKeyUp: newKeyUp
    });
  };

  render() {
    const {
      modal,
      className,
      classNameDialog,
      classNameDialogBG,
      style,
      styleDialog,
      styleDialogBG
    } = this.props;
    const clsWrapper = classNames(className, {
      '_dialog_wrapper': true,
      'show': this.state.open
    })

    const clsDialog = classNames(classNameDialog, {'_dialog': true})
    const clsDialogBG = classNames(classNameDialogBG, {'_dialog_bg': true})

    const _style = Object.assign({}, style);
    const _styleDialog = Object.assign({}, styleDialog);
    const _styleDialogBG = Object.assign({}, styleDialogBG);

    return (
      <div style={_style} className={clsWrapper}>
        <div style={_styleDialogBG} className={clsDialogBG} onClick={() => {
          if (modal && this.state.open)
            this.handleToggle()
        }}></div>
        <div style={_styleDialog} className={clsDialog}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export {DialogTitle, DialogContent, DialogActions}
export default Dialog;
