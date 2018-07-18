// PAGES
import Index from "../pages/index"
import Login from "../pages/login"
import News from "../pages/news"
import Profile from "../pages/profile"
import NoMatch from "../pages/notfound"

export const routes = [
    {
        name: 'На главную',
        path: '/',
        component: Index,
        exact: true,
        auth: false,
        menu: true
    },
    {
        name: 'Логин',
        path: '/login',
        component: Login,
        exact: false,
        auth: false,
        menu: false,
    },
    {
        name: 'Новости',
        path: '/news',
        component: News,
        exact: false,
        auth: false,
        menu: true
    },
    {
        name: 'Профиль',
        path: '/profile',
        component: Profile,
        exact: false,
        auth: true,
        menu: true
    },
    {
        name: '404',
        path: '',
        component: NoMatch,
        exact: false,
        auth: false,
        menu: false
    }
]