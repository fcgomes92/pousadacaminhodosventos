import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../routes';
import Dialog, {DialogTitle, DialogContent, DialogActions} from '../Dialog/Dialog';
import Loader from '../Loader/LoaderComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import s from '../../strings';
import {DIRECTUS_URL} from '../../settings.js';
import {directusClient} from '../../util';
import './PhotosComponent.css';

const strings = s.strings.photosComponent;

class PhotosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: {
        name: "",
        thumbURL: "",
        url: ""
      },
      loadingPhotos: true,
      photosList: []
    }
  }

  componentDidMount() {
    directusClient.getItems('image_gallery', {"filters[active][eq]": 1}).then((response) => {
      // console.log(response.data);
      this.setState({
        photosList: response.data
      }, () => {
        setTimeout(() => {
          this.setState({loadingPhotos: false});
        }, 250)
      });
    }).catch(err => {
      console.error(err);
    })
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  renderPhotoDialog = () => {
    const {selectedPhoto} = this.state;
    return (
      <Dialog className="dialog" modal ref={(dialog) => {
        if (dialog != null) {
          this.togglePhotoDialog = dialog.handleToggle;
        }
      }}>
        <DialogTitle>
          <h4>{selectedPhoto.name}</h4>
        </DialogTitle>
        <DialogContent>
          <ImageComponent loadingElement={<div className="dialog-spinner"><Loader className="spinner" size="2em"/></div>}
            imageProps={{
            style: {
              maxHeight: '80vh',
              maxWidth: '100%',
              margin: 'auto',
            },
            alt: selectedPhoto.name
          }} src={selectedPhoto.url}/>
        </DialogContent>
        <DialogActions>
          <button onClick={this.handleClosePhotoDialog}>{strings.closeDialog}</button>
        </DialogActions>
      </Dialog>
    )
  }

  handleOpenPhotoDialog = (photoIndex) => {
    const {photosList} = this.state;
    let photo = photosList[photoIndex];
    this.setState({
      selectedPhoto: {
        name: photo.title,
        thumbURL: `${DIRECTUS_URL}${photo.image.data.thumbnail_url}`,
        url: `${DIRECTUS_URL}${photo.image.data.url}`
      }
    }, () => {
      this.togglePhotoDialog();
    });
  }

  handleClosePhotoDialog = () => {
    this.togglePhotoDialog();
    this.setState({
      selectedPhoto: {
        name: "",
        thumbURL: "",
        url: ""
      }
    })
  }

  renderLoadingPhotos = () => {
    return (
      <Loader className="loading-element" size="2em"/>
    )
  }

  renderImageGalery = () => {
    const {photosList, loadingPhotos} = this.state;
    if (loadingPhotos) {
      return this.renderLoadingPhotos();
    }
    return (
      <div className="photo-list">
        {photosList.map((photo, index) => (
          <div className='photo-item' onClick={() => {
            this.handleOpenPhotoDialog(index)
          }} key={`photo-${index}`}>
            <ImageComponent wrapperProps={{
              className: 'photo-item-wrapper'
            }} src={`${DIRECTUS_URL}${photo.image.data.thumbnail_url}`} loadingElement={<Loader className="loading-element" size="2em"/>}/>
        </div>
        ))}
      </div>
    )
  }

  render() {
    const styles = {
      actions: {
        textAlign: 'center',
        margin: '1em 0'
      }
    };
    return (
      <div className='photos-component'>
        {this.renderPhotoDialog()}
        <h3 className="title">{strings.title}</h3>
        <h4 className="subtitle">{strings.subtitle}</h4>
        {this.renderImageGalery()}
        <div style={styles.actions}>
          <Link to={ROUTES.subscribeComponent.path}>
            <button>{strings.returnText}</button>
          </Link>
          <Link to={ROUTES.aboutComponent.path}>
            <button>{strings.aboutText}</button>
          </Link>
          <button onClick={this.props.contactCallback}>{strings.contactButton}</button>
        </div>
      </div>
    )
  }
}

export default PhotosComponent;
