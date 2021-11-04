/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 11:17:01
 * @LastEditors: william
 * @LastEditTime: 2021-11-03 18:08:11
 * @For What?:
 */
import Vue from 'vue'
import App from './App'
import { router, RouterMount } from './router/router'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
    router,
})
RouterMount(app, router, '#app')
app.$mount()
