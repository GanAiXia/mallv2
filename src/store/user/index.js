import {reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo} from '@/api'

const state = {
    code: '',
    token: localStorage.getItem("token"),
    userInfo: ''
}
const mutations = {
    GETCODE(state, code){
        state.code = code
    },
    USERLOGIN(state, token){
        state.token = token
    },
    GETUSERINFO(state, userInfo){
        state.userInfo = userInfo
    }
}
const actions = {
    async getCode({commit}, phone){
        let res = await reqGetCode(phone)
        if (res.code == 200) {
            commit("GETCODE", res.data)
            return 'ok'
        }else{
            return Promise.reject( new Error('faile') )
        }
    },
    async userRegister({commit}, user){
        console.log(user);
        let res = await reqUserRegister(user)
        if (res.code == 200) {
            return 'ok'
        }else{
            return Promise.reject( new Error('faile') )
        }
    },
    async userLogin({commit}, user){
        let res = await reqUserLogin(user)
        if (res.code == 200) {
            commit("USERLOGIN", res.data.token)
            localStorage.setItem("token", res.data.token)
            return 'ok'
        }else{
            console.log(res);
            return Promise.reject( new Error('faile') )
        }
    },
    async getUserInfo({commit}){
        let res = await reqUserInfo()
        if (res.code == 200) {
            commit("GETUSERINFO", res.data)
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}