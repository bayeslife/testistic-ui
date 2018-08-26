import api from '@/services/api'

export default {
  async signin (email, password) {
    var response = await api().post('/logIn', {
      email,
      password
    })
    const data = response.data
    return data
  }
}
