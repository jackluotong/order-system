/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 16:40:10
 * @LastEditors: william
 * @LastEditTime: 2021-11-03 18:49:39
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
    console.log()
})
export { router, RouterMount }
