<template>
    <div class="box">
        <div class="container">
            <!-- 推荐栏 -->
            <div class="con-recommend">
                <div class="card">
                    <div class="card-top">
                        <img src="@/assets/img/channel-recommend.jpg" alt="">
                        <span class="time">{{ msg[0].re.time }}</span>
                        <div class="title">
                            <span class="info">{{ msg[0].re.info }}</span>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <div class="item">
                            <img src="@/assets/img/channel-recommend-user1.jpg" alt="">
                            <span class="time">{{  msg[0].hot[0].time }}</span>
                            <div class="title">
                                <span class="info">{{ msg[0].hot[0].info }}</span>
                            </div>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/channel-recommend-user2.jpg" alt="">
                            <span class="time">{{  msg[0].hot[1].time }}</span>
                            <div class="title">
                                <span class="info">{{ msg[0].hot[1].info }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 热点栏 -->
            <div class="con-hot">
                <div class="card2">
                    <div class="player">
                        <video src=""></video>
                        <div class="message">
                            <span class="info"></span>
                            <span class="playNum"></span>
                            <span class="time"></span>
                        </div>
                    </div>
                    <div class="title">
                        <img class="userHeadshot" src="" alt="">
                        <span class="userName"></span>
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
                msg: [
                    { 
                        re: { info: "格陵兰岛登山之旅", time: "00:30" }, 
                        hot: [                            
                            { info: "俄罗斯登山节", time: "00:20", num: 1000},
                            { info: "瑞典之旅", time: "00:20", num: 200000},
                        ]  
                    }
                ]
            }
        }
    }
</script>
<style lang="less" type="text/less" scoped>
.box {
    width: 100%;
    height: 100%;
    overflow-y:scroll;
    overflow-x:auto;
    white-space: nowrap;
}
.card {
    width: 100%;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card .card-top {
    width: 95%;
    height: 240px;
    position: relative;
}
.card .card-top img {
    width: 100%;
    height: 200px;
    position: absolute;
    margin: 0 auto;
}
.card .card-top .time {
    position: absolute;
    right: 0;
    bottom: 0;
    right: 10px;
    bottom: 45px;
    color: white;
}
.card .card-top .title {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    span {
        line-height: 40px;
        color: #e6e6e6;
    }
}
.card .card-bottom {
    width: 95%;
    height: 240px;
    position: relative;
    display: flex;    
}
.card .card-bottom .item {
    width: 50%;
    height: 240px;
    position: relative;
    display: flex;
    justify-content: center;
}
.card .card-bottom .item img {
    width: 150px;
    height: 200px;    
}
.card .card-bottom .item .time {
    position: absolute;
    right: 0;
    bottom: 0;
    right: 20px;
    bottom: 45px;
    color: white;
}
.card .card-bottom .item .title {
    height: 40px;
    position: absolute;
    bottom: 0;
    span {
        line-height: 40px;
        color: #e6e6e6;
    }
}
</style>