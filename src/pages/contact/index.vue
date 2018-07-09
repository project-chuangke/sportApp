<template>
    <div class="box">
        <div class="header">
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content">
                        <router-link to="path">
                            <img class="side" src="@/assets/icon/search.svg">
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content">
                        <div class="center">                            
                            <div class="container">
                                <span>好友</span>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content" type="flex" justify="center">
                        
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="second-header">
            <div class="second-tab">
                <img src="@/assets/icon/addFriend.svg" alt="">
                <span>新朋友</span>
            </div>
            <div class="second-tab">
                <img src="@/assets/icon/concern.svg" alt="">
                <span>动态</span>
            </div>
            <div class="second-tab">
                <img src="@/assets/icon/message.svg" alt="">
                <span>消息</span>
            </div>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less" type="text/less" scoped>
    .box {width: 100%;height: 100%;}
    .header { height: 48px; width: 100%; background: #2A3440; position: fixed; border-bottom: 1px solid #232B36; box-shadow: 0 2px 0 #232B36;  
    .grid-content { width: 100%;
    .center { width: 100%; } 
    img.side { width: 24px; color: #999; display: block; margin: 12px auto; } 
    img.center { width: 24px; color: #999; margin-top: 12px; position: absolute; } 
    .container { width: 100%; height: 48px; color: #fff; justify-content:center; display: flex; justify-content: center; align-items:center;  
        a { text-decoration : none; color: #ddd;}
        .router-link-active {
            color: #fff;
        }        
     } } }
    .second-header {
        width: 100%;
        height: 60px;
        position: relative;
        top: 48px;
        background: #232B36;
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            & > span {
                color: #999;
                padding-left: 10px;
            }
        }
    }

     .body {
        width: 100%;
        position: relative;
        top: 48px;
        height:-webkit-calc(100% - 156px); 
        height:-moz-calc(100% - 156px); 
        height:calc(100% - 156px); 
        background: #2A3440;
     }
</style>