import React, {Component} from 'react';
import {Button, Grid, Cell, Spinner} from 'react-mdl';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../routes';
import Dialog, {DialogTitle, DialogContent, DialogActions} from '../Dialog/Dialog';
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
          <ImageComponent loadingElement={<div className="dialog-spinner"><Spinner className="spinner"/></div>}
            imageProps={{
            style: {
              maxWidth: '100%'
            },
            alt: selectedPhoto.name
          }} src={selectedPhoto.url}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClosePhotoDialog} colored>{strings.closeDialog}</Button>
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
      <div style={{
        textAlign: 'center'
      }}><Spinner/></div>
    )
  }

  renderImageGalery = () => {
    const {photosList, loadingPhotos} = this.state;
    if (loadingPhotos) {
      return this.renderLoadingPhotos();
    }
    return (
      <Grid noSpacing className="photo-list">
        {photosList.map((photo, index) => (
          <Cell col={2} className='photo-item' onClick={() => {
            this.handleOpenPhotoDialog(index)
          }} key={`photo-${index}`}>
            <ImageComponent wrapperProps={{
              className: 'photo-item-wrapper'
            }} src={`${DIRECTUS_URL}${photo.image.data.thumbnail_url}`} loadingElement={<div className="loading-element"><Spinner className="spinner"/></div>}/>
          </Cell>
        ))}
      </Grid>
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
            <Button colored>{strings.subscribeText}</Button>
          </Link>
          <Link to={ROUTES.aboutComponent.path}>
            <Button colored>{strings.aboutText}</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default PhotosComponent;
