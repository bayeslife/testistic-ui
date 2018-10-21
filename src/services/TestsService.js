import api from '@/services/api'

export default {

  async testruns (project='all',epic='all') {
    var response = await api().get(`/testistic.testruns.${project}.${epic}`)
    return response.data
  },

  async statistics (project='all',epic='all') {
    var response = await api().get(`/testistic.statistics.${project}.${epic}?count=1`)
    return response.data
  },

  async projects () {
    var response = await api().get('/projects')
    // console.log(response)
    return response.data
  },

  async createProject (project) {
    var response = await api().post('/projects', project)
    // console.log(response)
    return response.data
  }
}
