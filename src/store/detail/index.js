import {reqGoodsInfo, reqAddOrUpdateShopCart} from '@/api'

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
    },
    async AddOrUpdateShopCart({commit},{skuId, skuNum}){
        let res = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (res.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
//简化数据
let getters = {
    //路径导航
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    //产品信息
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    //产品售卖属性
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
