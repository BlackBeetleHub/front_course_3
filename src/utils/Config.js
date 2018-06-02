/* eslint-disable */
import axios from 'axios'

export default {
  Host: function () {
    return axios.create({
      baseURL: `http://localhost:5000/`
    })
  },
  IoT: function () {
    return axios.create({
      baseURL: `http://localhost:4320/`
    })
  }
} 