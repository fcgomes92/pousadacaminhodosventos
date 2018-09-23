import Loadable from 'react-loadable';

import LoadingComponent from './Components/utils/LoadableLoadingComponent';

const URLS = {
  base: () => '/',
  moreInfo: () => '/more-info',
  photos: () => '/photos',
  bookARoom: () => '/book-a-room',
  contactThanks: () => '/contact-thanks',
};

const ROUTES = [
  {
    exact: true,
    path: URLS.base(),
    component: Loadable({
      loader: () => import('./Components/Home/HomeComponent'),
      pastDelay: 300,
      loading: LoadingComponent,
    }),
    name: 'home',
  },
  {
    exact: true,
    path: URLS.moreInfo(),
    component: Loadable({
      loader: () => import('./Components/MoreInfo/MoreInfoComponent'),
      pastDelay: 300,
      loading: LoadingComponent,
    }),
    name: 'more-info',
  },
  {
    exact: true,
    path: URLS.photos(),
    component: Loadable({
      loader: () => import('./Components/Photos/PhotosComponent'),
      pastDelay: 300,
      loading: LoadingComponent,
    }),
    name: 'photos',
  },
  {
    exact: true,
    path: URLS.bookARoom(),
    component: Loadable({
      loader: () => import('./Components/BookARoom/BookARoomComponent'),
      pastDelay: 300,
      loading: LoadingComponent,
    }),
    name: 'photos',
  },
  {
    exact: false,
    path: URLS.contactThanks(),
    component: Loadable({
      loader: () => import('./Components/ContactThanks/ContactThanksComponent'),
      pastDelay: 300,
      loading: LoadingComponent,
    }),
    name: 'contact-thanks',
  },
  {
    exact: false,
    path: null,
    component: Loadable({
      loader: () => import('./Components/NotFound/NotFoundComponent'),
      pastDelay: 300,
      loading: LoadingComponent,
    }),
    name: 'not-found',
  },
];

export { ROUTES, URLS };
