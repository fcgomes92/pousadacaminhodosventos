import HomeComponent from './Components/Home/HomeComponent';
import MoreInfoComponent from './Components/MoreInfo/MoreInfoComponent';
import PhotosComponent from './Components/Photos/PhotosComponent';
import NotFound from './Components/NotFound/NotFoundComponent';

const URLS = {
    base: () => '/',
    moreInfo: () => '/more-info',
    photos: () => '/photos',
};

const ROUTES = [
    {
        exact: true,
        path: URLS.base(),
        component: HomeComponent,
        name: 'home',
    },
    {
        exact: true,
        path: URLS.moreInfo(),
        component: MoreInfoComponent,
        name: 'more-info',
    },
    {
        exact: true,
        path: URLS.photos(),
        component: PhotosComponent,
        name: 'photos',
    },
    {
        exact: false,
        path: null,
        component: NotFound,
        name: 'not-found',
    },
];

export {ROUTES, URLS};
