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
                            <img class="center" src="@/assets/icon/seperate.svg">
                            <div class="container">
                                <router-link :to="{name: 'Recommend'}">
                                    <span class="title">推荐</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                </router-link>
                                <router-link :to="{name: 'Channel'}">
                                    <span class="title">频道</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content" type="flex" justify="center">
                        <router-link to="path">
                        <img class="side" src="@/assets/icon/add.svg">
                    </router-link>
                    </div>
                </el-col>
            </el-row>
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
    .header { height: 47px; width: 100%; background: #2A3440; position: fixed; border-bottom: 1px solid #232B36; box-shadow: 0 2px 0 #232B36;  
    .grid-content { width: 100%;
    .center { width: 100%; } 
    img.side { width: 24px; color: #999; display: block; margin: 12px auto; } 
    img.center { width: 24px; color: #999; margin-top: 12px; position: absolute; } 
    .container { width: 100%; height: 48px; color: #fff; justify-content:center; display: flex; justify-content: center; align-items:center;  
        a { text-decoration : none; color: #ddd;}
        .router-link-active {
            color: #fff;
        }
    } 
    } 
    }
     .body {
        width: 100%;
        height: 100%;
        position: relative;
        top: 48px;
        height:-webkit-calc(100% - 48px); 
        height:-moz-calc(100% - 48px); 
        height:calc(100% - 48px); 
        background: #2A3440;
     }
</style>