/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 16:40:10
 * @LastEditors: william
 * @LastEditTime: 2021-11-09 18:42:03
 * @For What?:
 */
import { RouterMount, createRouter } from 'uni-simple-router'
const router = createRouter({
    platform: process.env.VUE_APP_PLATFORM,
    routes: [
        ...ROUTES,
        {
            path: '/',
            redirect: (to) => {
                return { name: '404' }
            },
        },
    ],
})

router.beforeEach((to, from, next) => {
    next()
    // if (to.name === 'login') {
    // } else {
    //     next()
    // }
})

router.afterEach((to, from) => {
    console.log(1111)
})
export { router, RouterMount }
