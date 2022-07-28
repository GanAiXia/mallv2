//home模块
import {reqCategoryList} from '@/api'
import {reqGetBannerList} from '@/api'
//存储数据
const state = {
    categoryList: [],
    bannerList: []
}
//修改state
const mutations = {
    CATEGORYLIST(state, categorylist){
        state.categoryList = categorylist
    },
    BANNERLIST(state, bannerList){
        state.bannerList = bannerList
    }
}
//处理actions，业务逻辑同，处理异步
const actions = {
    async categoryList({commit}){
        let res = await reqCategoryList()
        if (res.code == 200) {
            commit("CATEGORYLIST", res.data)
        }
    },
    async getBannerList({commit}){
        let bannerList = await reqGetBannerList()
        if (bannerList.code == 200) {
            commit("BANNERLIST", bannerList.data)
        }
    }
}
//简化数据处理，理解为计算属性
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters 
}