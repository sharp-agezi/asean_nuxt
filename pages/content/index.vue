<template>
  <div>
    我是服务端渲染
    <p>
      {{focusNews}}
    </p>

  </div>
</template>
<script>
  import {  mainAd } from '~/api/homePage';
  import axios from 'axios';
  export default{
     asyncData(){
     return axios.get('http://a2.aseantop.com/app//web/v1/mainAd').then(res=>{
         console.log(res)
       return {focusNews:res.data}
     })
    },
  }
</script>
