<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-11-03 11:17:01
 * @LastEditors: william
 * @LastEditTime: 2021-11-04 17:29:36
-->
<template>
    <view class="content">
        <image class="logo" src="/static/photos/1.png"></image>
        <view>
            <!-- <button @click="goto('/pages/welcome/welcome')">navigator</button> -->
            <navigator url="/pages/welcome/welcome">
                <button>开始</button>
            </navigator>
            <button @click="goto">router</button>
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
    methods: {
        goto() {
            this.router.push({ name: 'welcome' })
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
