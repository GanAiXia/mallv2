import {reqGetCode, reqUserRegister} from '@/api'

const state = {
    code: ''
}
const mutations = {
    GETCODE(state, code){
        state.code = code
    }
}
const actions = {
    async getCode({commit}, phone){
        let res = await reqGetCode(phone)
        if (res.code == 200) {
            commit("GETCODE", res.data)
            return 'ok'
        }else{
            return Promise.reject( new Error('faile'))
        }
    },
    async userRegister({commit}, user){
        console.log(user);
        let res = await reqUserRegister(user)
        if (res.code == 200) {
            return 'ok'
        }else{
            return Promise.reject( new Error('faile'))
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