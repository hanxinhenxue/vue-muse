import Vue from 'vue'
import Router from 'vue-router'
// 注册router组件
Vue.use(Router)
// 导入组件
// 基本组件
import message from '../components/basicModule/message.vue'
import linkMan from '../components/basicModule/linkMan.vue'
import state from '../components/basicModule/state.vue'

// 二级分类组件
// 聊天窗口
import chating from '../components/chatBox/chatBox.vue'


// 导航守卫
export default new Router({
  routes: [
    {
      path:'/message',name:'消息',component:message
    },
    {
      path:'/linkMan',name:'联系人',component:linkMan
    },
    {
      path:'/state',name:'动态',component:state
    },
    {
      path:'/',component:message,name:'消息'
    },
    {
      path:'/chating',name:'蕾姆',component:chating
    }
  ]
})
