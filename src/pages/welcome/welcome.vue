<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 15:30:16
 * @LastEditors: william
 * @LastEditTime: 2021-11-09 18:11:45
 * @For What?: 
-->
<template>
    <view>
        <view>
            <button>welcome</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {}
    },
    onLoad(...options) {
        //如果跳转之前的组件使用this.$Router.push({query:{name:age})
        console.log(this.$Route, '2222')
        //如果跳转之前的组件使用url?params的形式则使用options 来获取参数
        console.log(options, '111')
    },
}
</script>

<style lang="less"></style>
