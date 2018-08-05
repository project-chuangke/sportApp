<template>
    <div class="box">
        <div class="swiper-container" @click="pause()">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(d,i) in data" ref="myPlayer">
                    <video class="player" loop="loop">
                        <source :src="d.src" />
                    </video>
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
                    { src: "../../../static/video/1.mp4" },
                    { src: "../../../static/video/2.mp4" },
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
    video { width: 100%; height: 100%; }
</style>