import {reqCartList, reqDeleteCartById} from '@/api'

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
        if (res.code == 200) {
            commit("GETCARTLIST", res.data)
        }
    },
    async deleteCartListBySkuId({commit}, skuId){
        let result = await reqDeleteCartById(skuId)
        console.log(result);
        if (result.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
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