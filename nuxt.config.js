const path = require('path')

module.exports = {
    /*
  ** Headers of the page
  */
    head: {
        title: 'cnode-nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A Nuxt.js project for CNode.' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdn.bootcss.com/MaterialDesign-Webfont/2.3.54/css/materialdesignicons.css'},
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    modules: [
        ['nuxt-buefy', { materialDesignIcons: false }],
    ],
    /**
     ** Customize styles 
     */
    css: [
        // { src: 'bulma', lang: 'sass' },
        { src: '~assets/styles/bulma.reset.scss', lang: 'scss' },
        // { src: '~assets/styles/common.scss', lang: 'scss' }
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            config.resolve.alias['@'] = path.join(__dirname)
        }
    }
}
