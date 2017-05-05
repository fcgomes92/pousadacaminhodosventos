import React, {Component} from 'react';
import {Button} from 'react-mdl';
import Dialog, {DialogTitle, DialogContent, DialogActions} from '../Dialog/Dialog';
import './About.css';
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
          <ul className="contact-list">
            <li className="icon-site">
              <a target='_blank' href={strings.siteURL}>{strings.site}</a>
            </li>
            <li className="icon-github">
              <a target='_blank' href={strings.githubURL}>{strings.github}</a>
            </li>
            <li className="icon-email">
              <a target='_blank' href={strings.emailURL}>{strings.email}</a>
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button colored onClick={this.handleToggle}>{strings.closeButton}</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AboutDialog;
