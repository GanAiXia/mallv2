import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store';

Vue.use(VueRouter)

let router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // ...
        return {y:0}
    }
})

router.beforeEach((to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/')
        }else{
            if (name) {
                next()
            }else{
                try {
                    store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    }else{
        next()
    }
})

export default router