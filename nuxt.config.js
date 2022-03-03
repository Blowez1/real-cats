export default {
  head: {
    title: 'Real Cats',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }, {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap'

      }
    ]

  },

  serverMiddleware: [{
    path: '/api',
    handler: '~/api/index.js'
  }],

  css: [],


  plugins: [
    '~/plugins/repositories.js',
    '~/plugins/services.plugin.js',
  ],


  components: true,


  buildModules: [],


  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  loading: {
    color: '#002D70',
    height: '5px'
  },

  axios: {
    proxy: true,
  },


  build: {}
}
