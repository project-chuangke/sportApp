<template>
    <div class="box">
        <div class="swiper-container" @click="pause()">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(d,i) in data" ref="myPlayer">
                    <video class="player" loop="loop">
                        <source :src="d.src" />
                    </video>
                    <div class="msg">
                        <div class="op">
                            <div class="like">
                                <img src="@/assets/icon/likes.svg" alt="">           
                                <span>{{ d.likes }}</span>
                            </div>
                            <div class="comment">
                                <img src="@/assets/icon/comment.svg" alt="">           
                                <span>{{ d.comments }}</span>
                            </div>
                            <div class="transpond">
                                <img src="@/assets/icon/transpond.svg" alt="">           
                                <span>{{ d.transpond }}</span>
                            </div>
                        </div>
                        <div class="user">
                            <div class="headshot">
                                <img src="@/assets/img/headshot.jpg" alt="">
                            </div>
                            <div class="info">
                                <div class="name">
                                    @ {{ d.user.name }}
                                </div>
                                <div class="title">
                                    # {{ d.user.title }} #
                                </div>
                                <div class="music">
                                    {{ d.user.music }}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: [
                    { src: "../../../static/video/1.mp4", likes: 360, comments: 240, transpond: 1124 ,
                        user: { name: "Cookie226", title: "春风十里不如你", music: "十里不如你"}
                    },
                    { src: "../../../static/video/2.mp4", likes: 360, comments: 240, transpond: 1124 ,
                        user: { name: "Cookie226", title: "春风十里不如你", music: "十里不如你"}
                    },
                ],
                index: ""
            }
        },
        methods: {                    
            play() {
                $(".swiper-slide-active").find("video").trigger("play");    
            },
            replay() {
                $(".swiper-slide-active").find("video").trigger("ended");
            },
            pause() {
                if ($(".swiper-slide-active").find("video").hasClass('pause')) {
                    $(".swiper-slide-active").find("video").trigger("play");
                    $(".swiper-slide-active").find("video").addClass("play");
                    $(".swiper-slide-active").find("video").removeClass("pause");                
                }
                else if ($(".swiper-slide-active").find("video").hasClass('play')) {
                    $(".swiper-slide-active").find("video").trigger("pause");
                    $(".swiper-slide-active").find("video").addClass("pause");
                    $(".swiper-slide-active").find("video").removeClass("play"); 
                }             
            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                loop: false,
                onSlideChangeStart: function () {
                    $(".swiper-slide").find("video").trigger("pause");
                },
                onSlideChangeEnd: function (swiper) {
                    //切换自动播放                    
                    $(".swiper-slide-active").find("video").trigger("load");
                    $(".swiper-slide-active").find("video").trigger("play");
                    $(".swiper-slide-active").find("video").addClass("play");
                }
            })
            $(".swiper-slide-active").find("video").trigger("play");
            $(".swiper-slide-active").find("video").addClass("play");            
        },        
    }
</script>
<style lang="less" type="text/less" scoped>
    .box{ width: 100%; height: 100%; } 
    .swiper-container { width: 100%; height: 100%; }
    video {
        position: absolute;
    }
    .msg {
        width: 100%;
        height: 100%;
        position: relative;
        .op {
            width: 100%;
            height: 200px;
            position: absolute;
            bottom: 96px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            div {
                color: #fff;
                font-size: 12px;
                margin-right: 12px;
                flex: 1;
                width: 48px;
                text-align: center;
            }
        }
        .user {
            width: 100%;
            height: 96px;
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: row;
            .headshot {
                height: 100%;                
                img {
                    width: 72px;
                    height: 72px;
                    margin-left: 12px;
                    margin-right: 12px;
                    border-radius: 36px;
                }                                
            }
            .info {                
                div {
                    line-height: 24px;
                    color: #fff;
                }
            }
        }
    }
    video { width: 100%; height: 100%; }
</style>