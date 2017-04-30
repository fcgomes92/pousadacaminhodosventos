import React, {Component} from 'react';
import {Button} from 'react-mdl';
import Dialog, {DialogTitle, DialogContent, DialogActions} from '../Dialog/Dialog';
import s from '../../strings';

const strings = s.strings.aboutDialog;

class AboutDialog extends Component {
  handleToggle = () => {
    this.toggleDialog()
  };

  render() {
    return (
      <Dialog modal ref={(dialog) => {
        if (dialog != null) {
          this.toggleDialog = dialog.handleToggle;
        }
      }}>
        <DialogTitle>{strings.dialogTitle}</DialogTitle>
        <DialogContent>
          {strings.dialogContent}
          <hr/> {strings.contact}
        </DialogContent>
        <DialogActions>
          <Button colored onClick={this.handleToggle}>{strings.closeButton}</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AboutDialog;
