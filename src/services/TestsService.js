import api from '@/services/Api'

export default {
  async testruns () {
    var response = await api().get('/testruns')
    // console.log(response)
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
