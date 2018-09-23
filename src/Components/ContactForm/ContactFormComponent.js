import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { translate } from 'react-i18next';

import { DOMAIN } from '../../settings/constants';
import { URLS } from '../../routes';

class ContactFormComponent extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    classNameTitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    classNameTitleText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    classNameSubtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    classNameSubtitleText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    classNameTitle: '',
    classNameTitleText: '',
    classNameSubtitle: '',
    classNameSubtitleText: '',
  };

  render() {
    const {
      t,
      title,
      subtitle,
      className,
      classNameTitle,
      classNameTitleText,
      classNameSubtitle,
      classNameSubtitleText,
    } = this.props;

    const cls = {
      title: classNames(classNameTitle),
      titleText: classNames(classNameTitleText),
      subtitle: classNames(classNameSubtitle),
      subtitleText: classNames(classNameSubtitleText),
      form: classNames(className),
      inputField: 'flat-input flat-input--full-width',
      textAreaField: 'flat-text-area flat-text-area--full-width',
      submitButton: 'flat-button flat-button--full-width flat-button--green-500',
    };

    return (
      <form
        className={cls.form}
        action="https://formspree.io/sergiomarcusrgomes@hotmail.com"
        method="POST"
      >
        <div className={cls.title}>
          <span className={cls.titleText}>{title}</span>
        </div>
        <div className={cls.subtitle}>
          <span className={cls.subtitleText}>{subtitle}</span>
        </div>
        <input
          type="hidden"
          name="_next"
          value={`${DOMAIN}${URLS.contactThanks()}`}
        />
        <input
          type="hidden"
          name="_language"
          value="pt"
        />
        <input
          type="hidden"
          name="_cc"
          value="fcgomes.92@gmail.com"
        />
        <input
          type="text"
          name="_gotcha"
          style={{ display: 'none' }}
        />
        <input
          type="text"
          className={cls.inputField}
          name="name"
          required
          placeholder={t('yourName')}
        />
        <select
          name="_subject"
          required
          defaultValue={''}
          className={cls.inputField}
        >
          <option value="" disabled>{t('subject')}</option>
          <option value={t('subjectSelectQuestion')}>{t('subjectSelectQuestion')}</option>
          <option value={t('subjectSelectSuggestion')}>{t('subjectSelectSuggestion')}</option>
          <option value={t('subjectSelectReservation')}>{t('subjectSelectReservation')}</option>
        </select>
        <input
          type="email"
          className={cls.inputField}
          name="_replyto"
          required
          placeholder={t('yourEmail')}
        />
        <textarea
          className={cls.textAreaField}
          name="message"
          rows="8"
          required
          placeholder={t('message')}
        />
        <button className={cls.submitButton} type="submit">
          <span>{t('send')}</span>
        </button>
      </form>
    )
  }
}

export default translate('translations')(ContactFormComponent);