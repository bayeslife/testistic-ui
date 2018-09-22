'use strict'
module.exports = {
  NODE_ENV: '"production"',
  BACKEND_HOST: `"${process.env.TESTISTIC_API_HOST}"` || '"localhost"'
}
