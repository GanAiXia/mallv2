import {reqCartList} from '@/api'

const state = {}
const mutations = {}
const actions = {
    async getCartList({commit}){
        let res = await reqCartList()
        console.log(res);
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}