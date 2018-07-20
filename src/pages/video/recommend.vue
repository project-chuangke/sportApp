<template>
    <div class="box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(d,i) in data" ref="myPlayer">
                    <video loop="loop" v-bind:autoplay="{true: index==i}">
                        <source :src="d.src" />{{ i }}
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
        computed: {

        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                loop: false,
                onSlideChangeEnd: function (swiper) {
                    this.index = swiper.activeIndex;
                    alert( this.index );
                },
                onSlideChangeStart: function (swiper) {
                    this.index = 0;                    
                }
            })
        },
        methods: {
            handleClickSlide() {
                alert(10);
            }
        }
    }
</script>
<style lang="less" type="text/less" scoped>
    .box{ width: 100%; height: 100%; } .swiper-container { width: 100%; height: 100%; } video { width: 100%; height: 100%; }
</style>