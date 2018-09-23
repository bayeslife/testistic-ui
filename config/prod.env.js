'use strict'

var backendhost = process.env.TESTISTIC_API_HOST ? '"'+process.env.TESTISTIC_API_HOST+'"': '"localhost"'

module.exports = {
  NODE_ENV: '"production"',
  BACKEND_HOST: backendhost
}
