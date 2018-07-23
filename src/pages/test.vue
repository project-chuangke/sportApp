<template>
    <div class="box">
        <div class="box-player">
            <video class="media" :src="data[0].src" ></video>
        </div>
        <div class="box-player box-player-active">
            <video class="media" :src="data[0].src" ></video>
        </div>
        <div class="control">
            <span @click="play()">播放</span>
            <span @click="pause()">暂停</span>
            <span @click="replay">重新播放</span>
            <span @click=""></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: [
                    { src: "../../static/video/1.mp4" },
                    { src: "../../static/video/2.mp4" },
                ],
                index: ""
            }
        },
        methods: {
            getPlayer() {
                this.$player = $("box-player > .media");
            },
            play() {
               $(".box-player-active").find("video").trigger("play");          
            },
            pause() {
                i.pause();
            },
            replay() {
                i.load();
            },
            current() {
                alert(i.currentTime);
            }
        }        
    }   
</script>
<style lang="less" type="text/less" scoped>
    .box{ width: 100%; height: 100%; } 
</style> 