/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 16:40:10
 * @LastEditors: william
 * @LastEditTime: 2021-11-04 17:19:59
 * @For What?:
 */
import Vue from 'vue'
import { RouterMount, createRouter } from 'uni-simple-router'
const router = createRouter({
    platform: process.env.VUE_APP_PLATFORM,
    routes: [
        ...ROUTES,
        {
            path: '',
            redirect: (to) => {
                return { name: '404' }
            },
        },
    ],
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach((to, from) => {
    console.log(1111)
})
export { router, RouterMount }
