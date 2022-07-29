//search模块
import {reqGetSearchInfo} from '@/api';
//存储数据
const state = {
    searchList: {}
}
//修改state
const mutations = {
    GETSEARCHINFO(state, searchList){
        state.searchList = searchList
    }
}
//处理actions，业务逻辑同，处理异步
const actions = {
    async getSearchInfo({commit}, params = {}){
       let searchInfo = await reqGetSearchInfo(params)
       if (searchInfo.code == 200 ) {
           commit("GETSEARCHINFO", searchInfo.data)
       }
    }
}
//简化数据处理，理解为计算属性
const getters = {
    goodList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}

export default {
    state,
    mutations,
    actions,
    getters 
}