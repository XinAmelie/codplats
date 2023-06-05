import request from '@/utils/request'

export const getDirectoryCaseNum = () => {
  return request({
    url: '/caseApi/getDirectoryCaseNum/',
    method: 'GET'
  })
}

// 手工用例获取全部的caselist的数据

export const getCaselist = () => {
  return request({
    url: '/caseApi/getCaselist/',
    method: 'GET'
  })
}

// 接口用例的list列表

export const getInterfaceList = () => {
  return request({
    url: '/caseApi/getInterfaceCaselist/',
    method: 'GET'
  })
}

// 手工计划的list列表
export const getPlanManList = () => {
  return request({
    url: '/caseApi/getManPlanlist/',
    method: 'GET'
  })
}

// 接口计划的list列表
export const getPlanIfList = () => {
  return request({
    url: '/caseApi/getIfPlanlist/',
    method: 'GET'
  })
}

// 新建需求的list接口

export const getdemandLists = () => {
  return request({
    url: '/caseApi/getdemandList/',
    method: 'GET'
  })
}

// 获取缺陷的列表数据
export const getdefectLists = () => {
  return request({
    url: '/caseApi/getdefectList/',
    method: 'GET'
  })
}
