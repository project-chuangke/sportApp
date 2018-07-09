<template>
        <div class="box">
            <div class="header">
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="grid-content">
                            <router-link to="path">
                               
                            </router-link>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content">
                            <div class="center">                            
                                <div class="container">
                                    <span>发现</span>
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
            <div class="swiper">
                <div class="swiper-container" id="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="@/assets/img/1.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="@/assets/img/2.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="@/assets/img/3.jpg" alt="">
                        </div>                        
                    </div>       
                    <div class="swiper-pagination"></div>
                </div>                    
            </div>
            <div class="subs">
                <div class="sub">

                </div>
                <div class="sub">
                    
                </div>    
            </div>
           
            
        </div>
    </template>
    <script>        
        export default {           
            data() {
                return {                               
                    
                }
            },            
            computed: {
                
            },                
        }
    </script>
    <style lang="less" type="text/less" scoped>
        .header { height: 48px; width: 100%; background: #2A3440; position: fixed; border-bottom: 1px solid #232B36; box-shadow: 0 2px 0 #232B36;  
        .grid-content { width: 100%; height: 48px;
        .center { width: 100%; } 
        img.side { width: 24px; color: #999; display: block; margin: 12px auto; } 
        img.center { width: 24px; color: #999; margin-top: 12px; position: absolute; } 
        .container { width: 100%; height: 48px; color: #fff; justify-content:center; display: flex; justify-content: center; align-items:center;  
            a { text-decoration : none; color: #ddd;}
            .router-link-active {
                color: #fff;
            }        
         } } }
        .swiper {
            width: 100%;
            height: 240px;
            position: relative;
            top: 48px;
            img {
                width: 100%;
                height: 240px;
            }
        }
        
    </style>