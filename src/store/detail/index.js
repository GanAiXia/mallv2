import {reqGoodsInfo} from '@/api'

let state = {
    goodInfo: {}
}
let mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo
    }
}
let actions = {
    async getGoodInfo({commit}, skuId){

        let res = await reqGoodsInfo(skuId)
        if (res.code == 200) {
            commit("GETGOODINFO", res.data)
        }
    }
}
let getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
