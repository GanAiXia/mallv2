//API进行统一管理
import requests from './request'

//三级联动
export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})