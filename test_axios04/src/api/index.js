import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/'

/**
 * @param {string} name
 */
export function getUser (id, name = 'li', age = 18) {
  return axios({
    url: '/user',
    method: 'get',
    params: {
      id,
      name,
      age
    }
  })
}

/**
 * 审核用户
 * @param {string} name
 * @param {string} password
 */
export function login (name, password) {
  return axios({
    url: '/login',
    method: 'post',
    data: {
      name,
      password
    }
  })
}
