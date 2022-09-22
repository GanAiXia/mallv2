import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'

export default [
    {
        path: '/trade',
        component: Trade,
        meta: {isShow: true}
    },
    {
        path: "/shopcart",
        name: 'shopcart',
        component: ShopCart,
        meta: {isShow: true}
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: {isShow: true}
    },
    {
        path: "/home",
        component: Home,
        meta: {show: true}
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {show: true},
        name: "search"
    },
    {
        path: '/login',
        component: Login,
        meta: {show: false}
    },
    {
        path: '/register',
        component: Register,
        meta: {show: false}
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: {show: true}
    },        
    {
        path: "*",
        redirect: "/home"
    }

]