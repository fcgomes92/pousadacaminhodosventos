import HomeComponent from './Components/Home/HomeComponent';
import MoreInfoComponent from './Components/MoreInfo/MoreInfoComponent';
import PhotosComponent from './Components/Photos/PhotosComponent';
import BookARoomComponent from './Components/BookARoom/BookARoomComponent';
import NotFound from './Components/NotFound/NotFoundComponent';
import ContactThanksComponent from "./Components/ContactThanks/ContactThanksComponent";

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
        exact: true,
        path: URLS.bookARoom(),
        component: BookARoomComponent,
        name: 'photos',
    },
    {
        exact: false,
        path: URLS.contactThanks(),
        component: ContactThanksComponent,
        name: 'contact-thanks',
    },
    {
        exact: false,
        path: null,
        component: NotFound,
        name: 'not-found',
    },
];

export {ROUTES, URLS};
