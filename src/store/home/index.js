//home模块
import {reqCategoryList} from '@/api'
//存储数据
const state = {
    categoryList: []
}
//修改state
const mutations = {
    CATEGORYLIST(state, categorylist){
        state.categoryList = categorylist
    }
}
//处理actions，业务逻辑同，处理异步
const actions = {
    async categoryList({commit}){
        let res = await reqCategoryList()
        if (res.code == 200) {
            commit("CATEGORYLIST", res.data)
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