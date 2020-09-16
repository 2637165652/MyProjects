import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/'

/**
 * @param {string} name
 */
export function getList (page = 1, pageSize = 5) {
  return axios({
    url: '/family_education',
    method: 'get',
    params: {
      page,
      pageSize
    }
  })
}
