import {reqGetCode, reqUserRegister, reqUserLogin} from '@/api'

const state = {
    code: '',
    token: ''
}
const mutations = {
    GETCODE(state, code){
        state.code = code
    },
    USERLOGIN(state, token){
        state.token = token
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
            return 'ok'
        }else{
            console.log(res);
            return Promise.reject( new Error('faile') )
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