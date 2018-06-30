import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BikeIcon from '../svg/BikeIcon';
import '../../assets/scss/About.css';
import { translate } from 'react-i18next';
import Mountain2Icon from '../svg/Mountain2Icon';
import ScrollToTheEndComponent from '../ScrollToTheEnd/ScrollToTheEndComponent';

// import classNames from 'classnames';

class AboutComponent extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
  };

  FACILITIES_AMOUNT = 9;

  state = {
    section: null,
  };


  handleSectionRef = (ref) => {
    if (ref) {
      this.setState({ section: ref });
    }
  };

  renderFacilitiesListItems(listItemCls, listItemTextCls, listItemIconCls) {
    const { t } = this.props;

    let facilitiesListItems = [];
    for (let i = 0; i < this.FACILITIES_AMOUNT + 1; i++) {
      facilitiesListItems.push(
        <li className={listItemCls} key={`__fli_key_${i}`}>
          <BikeIcon className={listItemIconCls} />
          <span className={listItemTextCls}>{t(`aboutFacilitiesListItem${i}`)}</span>
        </li>,
      )
    }

    return facilitiesListItems;
  }

  render() {
    const { t } = this.props;

    const cls = {
      about: 'about full-height-page',
      aboutBg: 'about__background',
      aboutBgSvg: 'about__background__svg',
      aboutTitle: 'about__title',
      aboutTitleText: 'about__title__text',
      aboutFacilities: 'about__facilities',
      aboutFacilitiesTitle: 'about__facilities__title',
      aboutFacilitiesList: 'about__facilities__list',
      aboutFacilitiesListItem: 'about__facilities__list-item',
      aboutFacilitiesListItemText: 'about__facilities__list-item__text',
      aboutFacilitiesListItemIcon: 'about__facilities__list-item__icon',
      aboutCTAs: 'about__ctas',
      aboutCTAsCTABtn: 'about__ctas__cta-button',
      aboutScrollButton: 'flat-button flat-button--round animated pulse infinite',
      aboutScroll: 'about__scroll-block',
    };

    return (
      <section className={cls.about} ref={this.handleSectionRef} id="about">
        <div className={cls.aboutBg}>
          {/*<Mountain1Icon/>*/}
          <Mountain2Icon className={cls.aboutBgSvg} />
        </div>
        <div className={cls.aboutTitle}>
          <span className={cls.aboutTitleText}>{t('aboutTitle')}</span>
        </div>
        <div className={cls.aboutFacilities}>
          <span className={cls.aboutFacilitiesTitle}>{t('aboutFacilitiesTitle')}</span>
          <ul className={cls.aboutFacilitiesList}>
            {this.renderFacilitiesListItems(
              cls.aboutFacilitiesListItem,
              cls.aboutFacilitiesListItemText,
              cls.aboutFacilitiesListItemIcon,
            )}
          </ul>
        </div>
        <div className={cls.aboutCTAs}>
          <div className={cls.aboutCTAsCTABtn}></div>
          <div className={cls.aboutCTAsCTABtn}></div>
          <div className={cls.aboutCTAsCTABtn}></div>
        </div>
        <div className={cls.aboutScroll}>
          <ScrollToTheEndComponent element={this.state.section}>
            <button className={cls.aboutScrollButton}>
              <i className="material-icons">&#xE313;</i>
            </button>
          </ScrollToTheEndComponent>
        </div>
      </section>
    )
  }
}

export default translate('translations')(AboutComponent);
