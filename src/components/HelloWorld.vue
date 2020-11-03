<template>
  <div class="homePage">
   hello
   <p>iiiii</p>
  </div>
</template>

<script>
import {getListAPI,postFormAPI} from '@/api/api'
import {resquest} from '@/api/api'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    async getLists(){
      // 方法二（调取数据）
      let getRes  = await axios.get(`${resquest}`+ '/web/getNewsList?type=news_report&page=0&limit=10')
      console.log(getRes)
      
      // 方法一（调取数据）
      // getListAPI().then(res => console.log(res)).catch(err => console.log(err))
      // let getRes  = await getListAPI('resquest'+ '/web/getNewsList?type=news_report&page=0&limit=10')
      // console.log(getRes)
    }
  },
  created(){
    this.getLists()
    console.log('resquest'+ '/web/getNewsList?type=news_report&page=0&limit=10')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.homePage{
  width: 100px;
  height: 100px;
  p{
    color: wheat;
  }
}
</style>
