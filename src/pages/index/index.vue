<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 11:17:01
 * @LastEditors: william
 * @LastEditTime: 2021-11-14 13:10:40
-->
<template>
    <view class="content">
        <text>{{ this.globalData.name }}</text>
        <image class="logo" src="/static/photos/1.png"></image>
        <view>
            <!-- <button @click="goto('/pages/welcome/welcome')">navigator</button> -->
            <navigator url="/pages/welcome/welcome">
                <button>开始</button>
            </navigator>
            <button @click="goto">router</button>
            <button @click="goto1">router1</button>
            =======
            <button @click="goto()">router</button>
            >>>>>>> update router config
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '一起来干饭',
        }
    },
    onLoad() {},
    onShow() {
        console.log(this.globalData)
    },
    methods: {
        goto() {
            // this.$router.push({ name: 'welcome' })
            uni.navigateTo({
                url: '/pages/welcome/welcome?name=jack&age=26',
            })
        },
        goto1() {
            this.$Router.push({
                name: 'welcome',
                params: { sex: 'boy', address: 'sh' },
            })
        },
    },
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
