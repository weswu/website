import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/api/movies/list',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/api/movies/detail/',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/api/movies/detail/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/api/movies/detail/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/api/movies/detail',
    method: 'put',
    data: obj
  })
}
