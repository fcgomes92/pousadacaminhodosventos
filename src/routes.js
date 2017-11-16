import Home from './Components/Home/HomeComponent';
import NotFound from './Components/NotFound/NotFoundComponent';

const URLS = {
    base: () => '/',
    about: () => '/about',
    photos: () => '/photos',
};

const ROUTES = [
    {
        exact: true,
        path: URLS.base(),
        component: Home,
        name: 'home',
    },
    {
        exact: true,
        path: URLS.about(),
        component: Home,
        name: 'about',
    },
    {
        exact: true,
        path: URLS.photos(),
        component: Home,
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
