import {reqCartList} from '@/api'

const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(stata, cartList){
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({commit}){
        let res = await reqCartList()
        console.log(res);
        if (res.code == 200) {
            commit("GETCARTLIST", res.data)
        }
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}