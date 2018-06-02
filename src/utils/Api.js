/* eslint-disable */
import Host from '@/utils/Config'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

function decorate_get(params) {
  params.params['token'] = localStorage.getItem('token')
  params.params['id'] = localStorage.getItem('id')
  params.params['username'] = localStorage.getItem('username')
  return params
}

function decorate_post(params) {
  console.log(params)
  params.append('token', localStorage.getItem('token'))
  params.append('id', localStorage.getItem('id'))
  params.append('username', localStorage.getItem('username'))
  console.log(params)
  return params
}

export default {
  createUser (params) {
    return Host.Host().post('/register', params)
  },
  loginUser (params) {
    return Host.Host().post('/login', params)
  },
  check (params) {
    return Host.Host().get('/request', decorate_get(params))
  },
  loadPost (params) {
    return Host.Host().get('/post', params)
  },
  createPath (params) {
    return Host.Host().post('/create_path', decorate_post(params))
  }
}