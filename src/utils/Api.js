/* eslint-disable */
import Host from '@/utils/Config'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

function decorate_get(params) {
  params.params['token'] = localStorage.getItem('token')
  return params
}

function decorate_post(params) {
  params.append('token', localStorage.getItem('token'))
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
  }
}