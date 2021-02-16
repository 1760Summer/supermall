module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],//后缀名
            alias: {//别名
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}