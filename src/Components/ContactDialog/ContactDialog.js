import React, {Component} from 'react';
import {Button} from 'react-mdl';
import Dialog, {DialogTitle, DialogContent, DialogActions} from '../Dialog/Dialog';
import './ContactDialog.css';
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
        <DialogTitle><h4>{strings.dialogTitle}</h4></DialogTitle>
        <DialogContent>
          <div>
            {strings.dialogContent}
            <hr/>
            <ul className="contact-list">
              <li className="icon-phone">
                <a target='_blank' href={strings.contactPhoneLink}>{strings.contactPhone}</a>
              </li>
              <li className="icon-email">
                <a target='_blank' href={strings.contactEmailLink}>{strings.contactEmail}</a>
              </li>
            </ul>
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
