<template>
  <div class="box">
     <div class="main">
      <router-view></router-view>
     </div>
     <div class="tabs">
       <ul>
         <li>
           <router-link :to="{name:'Video'}" active-class="active">        
            视频
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Contact'}"  active-class="active">        
            好友
          </router-link>
        </li>
        
        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn">Go!</button>
        </li>
        <li>
          <router-link :to="{name:'Discover'}"  active-class="active">        
            发现
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Mine'}"  active-class="active">        
            我的
          </router-link>
        </li>
        </ul>
     </div>
  </div>
</template>
<script>
export default {
 
};
</script>
<style lang="less" type="text/less" scoped>
.box {
  min-width: 320px;
  min-height: 480px;
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2A3440;
  height:-webkit-calc(100% - 48px); 
  height:-moz-calc(100% - 48px); 
  height:calc(100% - 48px); 
}
.tabs {
  z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #232B36;
    box-shadow: 0 2px 4px #000;
    width: 100%;    
    ul {
      display: table;
      width: 100%;
      height: 48px;      
      & > li {
        text-align: center;        
        display: table-cell;
        padding: 8px 12px;
        cursor: pointer;
        vertical-align: middle;
        & > a {
          font-size: 16px;
          color: #999;
          &.active{
            color: #fff;
          }
        }
        
        & > div {
          font-size: 15px;
        }
      }
    }
  }
     
  button {          
    border: none;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    font-size: 16px;
    outline: none;
    position: absolute;
    margin-left: -56px;
    background: #aaa;
    margin-top: -47px;
    font-weight: bold;
  }
  

  
</style>

