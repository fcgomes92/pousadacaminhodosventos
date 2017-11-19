import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {translate} from 'react-i18next';

import '../../assets/scss/Contact.css';
import Mountain1Icon from "../svg/Mountain1Icon";
import ContactFormComponent from '../ContactForm/ContactFormComponent';

class ContactComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    render() {
        const {t} = this.props;

        const cls = {
            contact: 'contact full-height-page',
            contactBg: 'contact__background',
            contactBgSvg: 'contact__background__svg',
            contactFormTitle: 'contact__title',
            contactFormTitleText: 'contact__title__text',
            contactFormSubtitle: 'contact__subtitle',
            contactFormSubtitleText: 'contact__subtitle__text',
            contactForm: 'contact__form',
            inputField: 'flat-input flat-input--full-width',
            textAreaField: 'flat-text-area flat-text-area--full-width',
            submitButton: 'flat-button flat-button--full-width flat-button--green-500',
        };

        return (
            <section className={cls.contact} id="contact">
                <div className={cls.contactBg}>
                    <Mountain1Icon className={cls.contactBgSvg}/>
                </div>
                <ContactFormComponent className={cls.contactForm}
                                      classNameTitle={cls.contactFormTitle}
                                      classNameTitleText={cls.contactFormTitleText}
                                      classNameSubtitle={cls.contactFormSubtitle}
                                      classNameSubtitleText={cls.contactFormSubtitleText}
                                      title={t('contactFormTitle')}
                                      subtitle={t('contactFormSubtitle')}/>
            </section>
        )
    }
}

export default translate('translations')(ContactComponent);