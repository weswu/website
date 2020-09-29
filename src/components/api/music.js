import request from '@/router/axios'

// login
export function login(query) {
  return request({
    url: '/mapi/login/cellphone',
    method: 'get',
    params: query
  })
}










export function fetchList(query) {
  return request({
    url: '/act/model',
    method: 'get',
    params: query
  })
}
