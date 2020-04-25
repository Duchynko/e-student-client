/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const apiClient = process.env.VUE_APP_API_CLIENT // mock or server

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    resolve: {
      alias: {
        'api-client': path.resolve(__dirname, `src/services/${apiClient}`),
      },
    },
  },
}
