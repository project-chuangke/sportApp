<template>
    <div class="box">
        <div class="top">
            <div class="bg">
                <div class="header">
                    <div class="left">
                        <img src="" alt="" class="headShot">
                    </div>
                    <div class="center">
                        <span >Survivs丶track{{ name }}</span>
                        <span>创客号：634038895{{ id }}</span>
                        <span>运动等级：健将{{ level }}</span>
                    </div>
                    <div class="right">                        
                        <img class="code" src="@/assets/icon/code.svg" alt="">
                        <div class="con-share">
                            <img class="share" src="@/assets/icon/share.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="sdf">
                    <input type="text" placeholder="请输入个性签名">
                </div>
            </div>
           
        </div>
        
        <div class="tabs">
            <div class="tab">
                <img src="@/assets/icon/like.svg" alt="">
                <span>喜欢</span>
            </div>
            <div class="tab">
                <img src="@/assets/icon/collect.svg" alt="">
                <span>收藏</span>
            </div>
            <div class="tab">
                <img src="@/assets/icon/step.svg" alt="">
                <span>运动</span>
            </div>
        </div>
        <div class="subs">
            <div class="sub">
                <img src="@/assets/icon/setting.svg" alt="">
                <span>设置</span>
            </div>
            <div class="sub">
                <img src="@/assets/icon/about.svg" alt="">
                <span>关于我们</span>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less" type="text/less" scoped>
    .box {
        width: 100%;
        height: 100%;
    }
    .top {
        background: #fff;        
        .bg {
            background: -webkit-linear-gradient(to left top , rgb(183, 0, 255), rgb(0, 58, 250) ); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(to bottom right, rgb(183, 0, 255), rgb(0, 58, 250)); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(to bottom right, rgb(183, 0, 255), rgb(0, 58, 250)); /* Firefox 3.6 - 15 */
            background: linear-gradient(to bottom right, rgb(183, 0, 255), rgb(0, 58, 250)); /* 标准的语法 */
            opacity: 0.7;
            .header {
                width: 100%;
                height: 120px;        
                display: flex;
                padding-top: 20px;            
                & > .left {
                    flex: 5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        margin: 20px auto;
                        width: 80px;
                        height: 80px;
                        background: #fff;
                    }                
                }
                & > .center {
                    flex: 6;
                    display: flex;
                    flex-direction: column;
                    margin-top: 25px;            
                    span {
                        font-size: 12px;
                        color: #fff;
                    }
                    span:first-child {
                        margin-bottom: 5px;
                        font-size: 18px;
                    }
                }
                & > .right {
                    width: 100px;
                    flex: 3;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;                    
                    img.code {
                        width: 50px;
                        margin-top: 20px;
                                             
                    }                
                    .con-share {
                        width: 50px;                        
                        text-align: center;
                        img {
                            position: relative;
                            top: 10px;
                        }
                    }    
                }
            }
            .sdf {
                width: 100%;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                input {
                    width: 90%;
                    height: 36px;
                    background: none;
                    border: none;
                    outline: none;
                    font-size: 16px;
                    color: #fff;
                }
                input::-webkit-input-placeholder{
                    color:#fff;
                }
                input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                    color:#fff;
                }
                input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                    color:#fff;
                }
                input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
                    color:#fff;
                }
            }
        }
    }

    .tabs {
        width: 100%;
        height: 120px;
        box-shadow: 0 0 5px 0 #232B36;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .tab {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            img {
                margin-bottom: 10px;
                width: 48px;
            }
        }
    }

    .subs {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .sub { 
            height: 48px;    
            display: flex;
            flex-direction: row;  
            align-items: center;
            border-bottom: 1px solid #232B36;
            img {
                margin: 8px;
            }
            span {
                color: #fff;
            }
        }
    }
    
</style>