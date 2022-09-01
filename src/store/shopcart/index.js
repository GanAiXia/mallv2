import {reqCartList, reqDeleteCartById, reqUpdateCheckedByid} from '@/api'

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
    },
    async updateCheckedByid({commit},{skuId, isChecked}){
        let res = await reqUpdateCheckedByid(skuId, isChecked)
        console.log(res);
        if (res.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({dispatch, getters}){
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
          let res = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
          PromiseAll.push(res) 
        })
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({dispatch, state}, isChecked){
        let promiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedByid', {skuId: item.skuId, isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
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