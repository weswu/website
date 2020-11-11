import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/api/news/list',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/api/news/detail/',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/api/news/detail/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/api/news/detail/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/api/news/detail',
    method: 'put',
    data: obj
  })
}
