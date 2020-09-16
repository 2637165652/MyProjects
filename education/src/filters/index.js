import moment from './moment'

export default {
  install (Vue) {
    Vue.filter('moment', moment)
  }
}
