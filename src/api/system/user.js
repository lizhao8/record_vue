import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/user/list/' + params['page'] + '/' + params['limit'],
    method: 'get',
    params: params
  })
}

export function state(params) {
  return request({
    url: '/user/state/' + params['page'] + '/' + params['limit'],
    method: 'get',
    params: params
  })
}
