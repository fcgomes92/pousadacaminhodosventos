import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import {translate} from 'react-i18next';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import '../../assets/scss/Photos.css';
import {directusClient, DIRECTUS_URL} from '../../settings/settings';
import NavbarComponent from '../Navbar/NavbarComponent';
import SimpleBannerComponent from '../SimpleBanner/SimpleBannerComponent';
import FooterComponent from "../Footer/FooterComponent";
import LoaderComponent from "../Loader/LoaderComponent";
import {URLS} from "../../routes";

class PhotosComponent extends Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    state = {
        images: [],
        loadingImages: true,
    };

    componentDidMount() {
        const {t} = this.props;
        document.title = t('pageTitle', {page: t('photosPageTitle')});
        window.scrollTo(0, 0);

        this.handleLoadGalleryImages();
    }

    handleLoadGalleryImages = () => {
        directusClient.getItems('image_gallery', {"filters[active][eq]": 1}).then((response) => {
            this.setState({
                images: response.data,
                loadingImages: false,
            });
        }).catch(err => {
            console.error(err);
        });
    };

    renderGallery() {
        const {t} = this.props;
        const cls = {
            photosBlock: 'photos full-height-page',
            photosBlockTitle: 'photos__title',
            photosBlockTitleText: 'photos__title__text',
            photosGallery: 'photos__gallery',
            photosBlockCta: 'photos__cta',
            ctaBtn: 'link link--button link--button--green-500',
        };

        const images = this.state.images.map(image => {
            return {
                original: `${DIRECTUS_URL}${image.image.data.url}`,
                thumbnail: `${DIRECTUS_URL}${image.image.data.thumbnail_url}`,
            }
        });

        let gallery = <LoaderComponent size={"2em"}/>;

        if (!this.state.loadingImages) {
            gallery = <ImageGallery
                items={images}
                lazyLoad
                thumbnailPosition={"top"}
                showIndex/>
        }

        return (
            <div className={cls.photosBlock}>
                <div className={cls.photosBlockTitle}>
                    <span className={cls.photosBlockTitleText}>{t('photosGalleryTitle')}</span>
                </div>
                <div className={cls.photosGallery}>
                    {gallery}
                </div>
                <div className={cls.photosBlockCta}>
                    <Link to={URLS.bookARoom()} className={cls.ctaBtn}>
                        <span>{t('bookARoom')}</span>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        const {t} = this.props;
        return (
            <main>
                <NavbarComponent/>
                <SimpleBannerComponent upperText={t('photosBannerTitle1')} lowerText={t('photosBannerTitle2')}/>
                {this.renderGallery()}
                <FooterComponent
                    pageMapItems={[
                        {text: t("footerMapHome"), url: URLS.base()},
                        {text: t("footerMapMoreInfo"), url: URLS.moreInfo()},
                        {text: t("footerMapBookARoom"), url: URLS.bookARoom()},
                    ]}/>
            </main>
        )
    }
}

export default translate('translations')(PhotosComponent);