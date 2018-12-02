<template>
  <div>
    我是服务端渲染
    <p>
      {{focusNews}}
    </p>
    <div>
      {{mainData}}
    </div>

  </div>
</template>
<script>
  import {  mainAd,listColumnInfo } from '~/api/homePage';
  import axios from 'axios';
  export default{
     async asyncData(){
       let main = await mainAd();
       let bbb= await listColumnInfo({reqdata:{columnIds:'2,3,43,23,41,14,17,19,20,21,9,11,12,13'}});
       return {focusNews:main,mainData:bbb}
    },
  }
</script>
