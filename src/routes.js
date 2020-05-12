import { Home, Photos, Places} from '.pages';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/photos',
        component: Photos,
        breadcrumbName: 'Photo'
    },
]