export default {
  mode: 'universal',

  /*
	 ** Headers of the page
	 */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
	 ** Customize the progress-bar color
	 */
  loading: { color: '#39b982' },

  /*
	 ** Global CSS
	 */
  css: [],

  /*
	 ** Plugins to load before mounting the App
	 */
  plugins: [],

  /*
	 ** Nuxt.js modules
	 */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],

  /*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
  axios: {},

  /*
	 ** Build configuration
	 */
  build: {

    /*
		 ** You can extend webpack config here
		 */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js\vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
};