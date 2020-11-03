import http from '../utils/http'
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
//方法二：在先写如协议+端口号，在相关页面添加+字段
let resquest = "http://m.taiecloud.com/api/"

export {resquest}

// helloWorls.vue
// import {resquest} from '@/api/api'
// let getRes  = await axios.get(`${resquest}`+ '/web/getNewsList?type=news_report&page=0&limit=10')
// console.log(getRes)



//方法一 ： 数据请求可以在这个文件中调取接口，然后在相关页面直接导入要是用的接口getListAPI（）直接调取
// get请求
export function getListAPI(params){
    return http.get(`${resquest}web/getNewsList?type=news_report&page=0&limit=10`,params)
}
// post请求
export function postFormAPI(params){
    return http.post(`${resquest}/postForm.json`,params)
}
// put 请求
export function putSomeAPI(params){
    return http.put(`${resquest}/putSome.json`,params)
}
// delete 请求
export function deleteListAPI(params){
    return http.delete(`${resquest}/deleteList.json`,params)
}


// helloWorld.vue
// getListAPI().then(res => console.log(res)).catch(err => console.log(err))
// let getRes  = await getListAPI('resquest'+ '/web/getNewsList?type=news_report&page=0&limit=10')
// console.log(getRes)
