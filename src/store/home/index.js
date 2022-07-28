//home模块
import {reqCategoryList, reqGetBannerList, reqFloorList} from '@/api'

//存储数据
const state = {
    categoryList: [], //栏目数据
    bannerList: [],   //首页banner
    floorList: [],    //楼层数据
}
//修改state
const mutations = {
    CATEGORYLIST(state, categorylist){
        state.categoryList = categorylist
    },
    BANNERLIST(state, bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList){
        state.floorList = floorList
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
    },
    async getFloorList({commit}){
        let floorList = await reqFloorList()
        if (floorList.code == 200) {
            commit("FLOORLIST", floorList.data)
        }
    },    
}
//简化数据处理，理解为计算属性
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters 
}