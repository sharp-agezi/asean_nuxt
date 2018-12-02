const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // {
    //   src: '*.scss',
    //   lang: 'sass'
    // }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~plugins/axios.js', ssr: false },
    // { src: '~plugins/iview.js', ssr: false },
    { src: '~plugins/plugins.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // prefix: '/api/',
    // proxy: true // Can be also an object with default options
  },

  // proxy: {
  //   '/api/': { target: 'http://localhost:8080', pathRewrite: {'^/api/': ''} }
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {

      // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');
      //
      // vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader';

    }
  }
}
