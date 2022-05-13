// import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000
  },
  publicRuntimeConfig: {
    // This will get the real OS envs
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  ssr: true,
  env: {
    BASE_URL: process.env.BASE_URL
    // envs will be replace during build
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meta-review',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/axios-accessor',
      ssr: false
    },
    '~/plugins/meta/userService.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
    // '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
    // '@nuxtjs/auth-next',
  ],
  styleResources: {
    scss: '@/assets/sass/_variables.scss'
  },
  router: {
    middleware: ['check-auth']
  },

  // auth: {
  //   // Options
  //   strategies: {
  //     customeScheme: {
  //       // scheme: 'refresh',
  //       scheme: '~/nuxt/auth/customScheme',
  //       token: {
  //         property: 'accessToken',
  //         global: true,
  //         maxAge: 3600
  //       },
  //       refreshToken: {
  //         property: 'refreshToken',
  //         data: 'refreshToken',
  //         maxAge: 2678400
  //       },
  //
  //       endpoints: {
  //         login: {
  //           url: '/account/login',
  //           method: 'post'
  //         },
  //         // api get
  //         // user: {
  //         //   url: '/account/me',
  //         //   method: 'get'
  //         // },
  //         // refresh: {
  //         //   url: '/account/login',
  //         //   method: 'post'
  //         // },
  //         logout: false
  //       }
  //       // autoLogout: false,
  //     }
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     callback: '/login',
  //     home: '/profile'
  //   },
  //   tokenRequired: true,
  //   tokenType: 'bearer',
  //   plugins: [
  //     // '~/plugins/notificationHubPlugin',
  //     // '~/plugins/event-bus'
  //   ]
  // },
  proxy: {
    // '/account': {
    //   logLevel: 'debug',
    //   target: process.env.GATEWAY_URL ? process.env.GATEWAY_URL : 'http://sso:8080',
    //   pathRewrite: {
    //     '^/': '/api/v1/'
    //   },
    //   changeOrigin: true,
    //   onProxyReq(request) {
    //     request.setHeader('Accept-Encoding', 'gzip') //
    //   }
    // }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    redirectError: {
      401: '/login',
      404: '/404'
    },
    redirect: {
      // login: '/login',
      // logout: '/login',
      // callback: '/login',
      home: '/'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // vuetify: {
  //   // customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: true,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
