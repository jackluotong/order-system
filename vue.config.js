/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 17:41:11
 * @LastEditors: william
 * @LastEditTime: 2021-11-03 17:56:56
 * @For What?:
 */
const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                ROUTES: webpack.DefinePlugin.runtimeValue(() => {
                    const tfPages = new TransformPages({
                        includes: ['path', 'name', 'aliasPath'],
                    })
                    return JSON.stringify(tfPages.routes)
                }, true),
            }),
        ],
    },
}
