import React, {Component} from 'react';
import {Button, Grid, Cell, Spinner} from 'react-mdl';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../routes';
import Dialog, {DialogTitle, DialogContent, DialogActions} from '../Dialog/Dialog';
import s from '../../strings';
import './PhotosComponent.css';

const strings = s.strings.photosComponent;

const HOST = process.env.PUBLIC_URL;

const mockPhotoList = [
  {
    name: "Foto 1",
    thumbURL: `${HOST}images/thumb-pcv-1.jpeg`,
    url: `${HOST}images/pcv-1.jpeg`
  }, {
    name: "Foto 2",
    thumbURL: `${HOST}images/thumb-pcv-2.jpeg`,
    url: `${HOST}images/pcv-2.jpeg`
  }, {
    name: "Foto 3",
    thumbURL: `${HOST}images/thumb-pcv-3.jpeg`,
    url: `${HOST}images/pcv-3.jpeg`
  }, {
    name: "Foto 4",
    thumbURL: `${HOST}images/thumb-pcv-4.jpeg`,
    url: `${HOST}images/pcv-4.jpeg`
  }, {
    name: "Foto 5",
    thumbURL: `${HOST}images/thumb-pcv-5.jpeg`,
    url: `${HOST}images/pcv-5.jpeg`
  }, {
    name: "Foto 6",
    thumbURL: `${HOST}images/thumb-pcv-6.jpeg`,
    url: `${HOST}images/pcv-6.jpeg`
  }, {
    name: "Foto 7",
    thumbURL: `${HOST}images/thumb-pcv-7.jpeg`,
    url: `${HOST}images/pcv-7.jpeg`
  }, {
    name: "Foto 8",
    thumbURL: `${HOST}images/thumb-pcv-8.jpeg`,
    url: `${HOST}images/pcv-8.jpeg`
  }, {
    name: "Foto 9",
    thumbURL: `${HOST}images/thumb-pcv-9.jpeg`,
    url: `${HOST}images/pcv-9.jpeg`
  }, {
    name: "Foto 10",
    thumbURL: `${HOST}images/thumb-pcv-10.jpeg`,
    url: `${HOST}images/pcv-10.jpeg`
  }, {
    name: "Foto 11",
    thumbURL: `${HOST}images/thumb-pcv-11.jpeg`,
    url: `${HOST}images/pcv-11.jpeg`
  }, {
    name: "Foto 12",
    thumbURL: `${HOST}images/thumb-pcv-12.jpeg`,
    url: `${HOST}images/pcv-12.jpeg`
  }, {
    name: "Foto 13",
    thumbURL: `${HOST}images/thumb-pcv-13.jpeg`,
    url: `${HOST}images/pcv-13.jpeg`
  }, {
    name: "Foto 14",
    thumbURL: `${HOST}images/thumb-pcv-14.jpeg`,
    url: `${HOST}images/pcv-14.jpeg`
  }, {
    name: "Foto 15",
    thumbURL: `${HOST}images/thumb-pcv-15.jpeg`,
    url: `${HOST}images/pcv-15.jpeg`
  }, {
    name: "Foto 16",
    thumbURL: `${HOST}images/thumb-pcv-16.jpeg`,
    url: `${HOST}images/pcv-16.jpeg`
  }, {
    name: "Foto 17",
    thumbURL: `${HOST}images/thumb-pcv-17.jpeg`,
    url: `${HOST}images/pcv-17.jpeg`
  }, {
    name: "Foto 18",
    thumbURL: `${HOST}images/thumb-pcv-18.jpeg`,
    url: `${HOST}images/pcv-18.jpeg`
  }
]

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
      photosList: mockPhotoList
    }
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
          <img style={{
            maxWidth: '100%'
          }} src={selectedPhoto.url} alt={selectedPhoto.name}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClosePhotoDialog} colored>{strings.closeDialog}</Button>
        </DialogActions>
      </Dialog>
    )
  }

  handleOpenPhotoDialog = (photoIndex) => {
    const {photosList} = this.state;
    this.setState({
      selectedPhoto: photosList[photoIndex],
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
    return (<Spinner/>)
  }

  renderImageGalery = () => {
    const {photosList} = this.state;
    return (
      <Grid noSpacing className="photo-list">
        {photosList.map((photo, index) => (
          <Cell col={2} className='photo-item' onClick={() => {
            this.handleOpenPhotoDialog(index)
          }} style={{
            background: `url(${photo.thumbURL}) center / cover`
          }} key={`photo-${index}`}></Cell>
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
