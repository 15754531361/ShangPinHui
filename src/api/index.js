import request from './request'

export const reqCategoryList = () =>
  request({ url: '/product/getBaseCategoryList', method: 'get' })
