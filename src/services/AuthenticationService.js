import api from '@/services/Api'

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
