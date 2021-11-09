<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 11:17:01
 * @LastEditors: william
 * @LastEditTime: 2021-11-09 18:38:48
 * @For What?: 
-->
<script>
export default {
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show', this.globalData)
    },
    onHide: function () {
        console.log('App Hide', ROUTES)
    },
    globalData: {
        name: 'jack',
    },
}
</script>

<style>
/*每个页面公共css */
</style>
