import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {translate} from 'react-i18next';

import NavbarComponent from '../Navbar/NavbarComponent';
import SimpleBannerComponent from '../SimpleBanner/SimpleBannerComponent';
import FooterComponent from "../Footer/FooterComponent";
import ContactFormComponent from "../ContactForm/ContactFormComponent";
import '../../assets/scss/BookARoom.css';
import {URLS} from "../../routes";
import Mountain1Icon from "../svg/Mountain1Icon";

class MoreInfoComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    componentDidMount() {
        const {t} = this.props;
        document.title = t('pageTitle', {page: t('moreInfoPageTitle')});
        window.scrollTo(0, 0);
    }

    renderContactForm() {
        const {t} = this.props;
        const cls = {
            bookARoom: 'book-a-room full-height-page',
            bookARoomBlock: 'book-a-room__block',
            bookARoomBg: 'book-a-room__background',
            bookARoomBgSvg: 'book-a-room__background__svg',
            bookARoomContactsInfo: 'book-a-room__contacts-info',
            bookARoomContactsInfoList: 'book-a-room__contacts-info__list',
            bookARoomContactsInfoListItem: (icon) => `book-a-room__contacts-info__list__item ${icon}`,
            bookARoomContactsInfoListItemButton: `book-a-room__contacts-info__list__item book-a-room__contacts-info__list__item--button`,
            bookARoomFormTitle: 'book-a-room__title',
            bookARoomFormTitleText: 'book-a-room__title__text',
            bookARoomFormSubtitle: 'book-a-room__subtitle',
            bookARoomFormSubtitleText: 'book-a-room__subtitle__text',
            bookARoomCardReminder: 'book-a-room__card-reminder',
            bookARoomCardReminderText: 'book-a-room__card-reminder__text',
            bookARoomForm: 'book-a-room__form',
            inputField: 'flat-input flat-input--full-width',
            textAreaField: 'flat-text-area flat-text-area--full-width',
            submitButton: 'flat-button flat-button--full-width flat-button--green-500',
            link: 'link link--green-500',
            linkButton: 'link link--button--green-500'
        };

        return (
            <div className={cls.bookARoom}>
                <div className={cls.bookARoomBg}>
                    <Mountain1Icon className={cls.bookARoomBgSvg}/>
                </div>
                <div className={cls.bookARoomCardReminder}>
                            <span className={cls.bookARoomCardReminderText}>
                                {t('bookARoomCardReminder')}
                            </span>
                </div>
                <div className={cls.bookARoomBlock}>
                    <div className={cls.bookARoomContactsInfo}>
                        <div className={cls.bookARoomFormSubtitle}>
                            <span className={cls.bookARoomFormSubtitleText}>
                                {t('contactsInfoTitle')}
                            </span>
                        </div>
                        <ul className={cls.bookARoomContactsInfoList}>
                            <li className={cls.bookARoomContactsInfoListItem("icon-phone")}>
                                <a target='_blank'
                                   className={cls.link}
                                   href={t("contactPhoneLink")}>
                                    {t("contactPhone")}
                                </a>
                            </li>
                            <li className={cls.bookARoomContactsInfoListItem("icon-phone")}>
                                <a className={cls.link}
                                   target='_blank'
                                   href={t("contactPhoneLink2")}>
                                    {t("contactPhone2")}
                                </a>
                            </li>
                            <li className={cls.bookARoomContactsInfoListItem("icon-email")}>
                                <a className={cls.link}
                                   target='_blank'
                                   href={t("contactEmailLink")}>
                                    {t("contactEmail")}
                                </a>
                            </li>
                            <li className={cls.bookARoomContactsInfoListItem("icon-map")}>
                                <a target='_blank'
                                   className={cls.link}
                                   href={t("contactAddressLink")}>
                                    {t("contactAddressPt1")} {t("contactAddressPt2")}
                                </a>
                            </li>
                            <li className={cls.bookARoomContactsInfoListItemButton}>
                                <a target='_blank'
                                   className={cls.linkButton}
                                   href={t("contactAddressLink")}>
                                    {t("howToGetThere")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cls.bookARoomBlock}>
                    <ContactFormComponent className={cls.bookARoomForm}
                                          classNameTitle={cls.bookARoomFormTitle}
                                          classNameTitleText={cls.bookARoomFormTitleText}
                                          classNameSubtitle={cls.bookARoomFormSubtitle}
                                          classNameSubtitleText={cls.bookARoomFormSubtitleText}
                                          subtitle={t('bookARoomFormSubtitle')}/>
                </div>
            </div>
        )
    }

    render() {
        const {t} = this.props;

        return (
            <main>
                <NavbarComponent/>
                <SimpleBannerComponent upperText={t('bookARoomTitle1')} lowerText={t('bookARoomTitle2')}/>
                {this.renderContactForm()}
                <FooterComponent
                    pageMapItems={[
                        {text: t("footerMapHome"), url: URLS.base()},
                        {text: t("footerMapMoreInfo"), url: URLS.moreInfo()},
                        {text: t("footerMapPhotos"), url: URLS.photos()},
                    ]}/>
            </main>
        )
    }
}

export default translate('translations')(MoreInfoComponent);
