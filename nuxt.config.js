module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'profile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    '~/assets/main.scss',
  ],
  plugins: [
    // { src: '~/plugins/api' },
    // { src: '~/plugins/auth' },
    // { src: '~/plugins/error' },
    { src: '~/plugins/flags' },
    { src: '~/plugins/helpers' },
    { src: '~/plugins/vue-the-mask', ssr: false },
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: ['nuxt-svg-loader'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

