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
                    <Banner swiperid="go">
                        <div slot='swiper-con' class='swiper-slide'>
                            <img src='@/assets/img/1.jpg' />
                        </div>
                        <div slot='swiper-con' class='swiper-slide'>
                            <img src='@/assets/img/2.jpg' />
                        </div>
                        <div slot='swiper-con' class='swiper-slide'>
                            <img src='@/assets/img/3.jpg' />
                        </div>
                    </Banner>
                </div>                    
            </div>
            <!-- <div class="subs">
                <div class="sub">
                    <div class="container">
                        <img src="@/assets/icon/news.svg" alt="">
                        <span>动态</span>
                    </div>                    
                </div>
                <div class="sub">
                    <div class="container">
                        <img src="@/assets/icon/shop.svg" alt="">
                        <span>商店</span>
                    </div>                    
                </div>    
            </div> -->

           <!-- 方案2 -->
            <div class="subs">
                <router-link to="{name: 'News'}">
                    <div class="sub">
                        <img src="@/assets/icon/news.svg" alt="">
                        <span>动态</span>
                    </div>
                </router-link>
                <router-link to="{name: 'Shop'}">
                    <div class="sub">
                        <img src="@/assets/icon/shop.svg" alt="">
                        <span>商店</span>
                    </div>
                </router-link>
            </div>
            
        </div>
    </template>
    <script>
        import Banner from "@/components/discover/banner";
        export default {  
            components: {
                Banner
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
                .router-link-active { color: #fff;}        
                }    
            } 
         }
        .swiper {
            width: 100%;
            position: relative;
            top: 48px;             
            .swiper-slide {                
                img {                
                    width: 100%;
                    margin: auto;
                } 
            }          
        }
        /* 方案1 */
        /* .subs {
            width: 100%;
            height: 160px;            
            position: relative;
            display: flex;            
            margin-top: 48px;
            .sub {                                                                      
                height: 100%;
                flex: 1;
                .container {
                    width: 140px;
                    height: 140px;
                    display: flex;
                    flex-direction: column;
                    background: #232B36;
                    box-shadow: 0 0 5px 0 #000;
                    justify-content: center;  
                    align-items: center;
                    margin: 20px auto;
                    img {
                        width: 64px;
                        display: inline-block;
                        margin-bottom: 10px;
                    }    
                    span {
                        display: inline-block;
                        font-size: 18px;
                        color: #fff;
                    }
                }
                        
            }
        } */
        /* 方案2 */
        .subs {
            width: 100%;
            margin-top: 48px;
            display: flex;
            flex-direction: column;            
            .sub {
                width: 100%;
                display: flex;
                align-items: center;
                
                border-bottom: 1px solid #232B36;
                img {
                    width: 36px;
                    margin: 10px;
                    display: inline-block;
                }
                span {
                    display: inline-block;
                    color: #fff;
                }
            }
        }
        
    </style>