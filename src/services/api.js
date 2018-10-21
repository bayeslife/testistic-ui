import axios from 'axios'

export default() => {
  // console.log(`Backend:${process.env.BACKEND_HOST}`)
  return axios.create({
    baseURL: `http://${process.env.BACKEND_HOST}:8081`
  })
}
