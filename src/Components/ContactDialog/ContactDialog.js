import React, {Component} from 'react';
import {Button} from 'react-mdl';
import Dialog, {DialogTitle, DialogContent, DialogActions} from '../Dialog/Dialog';
import s from '../../strings';

const strings = s.strings.contactDialog;

class ContactDialog extends Component {
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
          <div>
            {strings.dialogContent}
            <hr/>
            <p>{strings.contactPhone}</p>
            <p>{strings.contactEmail}</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button colored onClick={this.handleToggle}>{strings.closeButton}</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ContactDialog;
