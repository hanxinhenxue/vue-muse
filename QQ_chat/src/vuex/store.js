// 该文件为vuex的store的数据层,只处理state
import Vue from 'vue'//引入vue
import Vuex from 'vuex'//引入vuex

// 将vuex的其他属性引入
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

// 注册vuex
Vue.use(Vuex)

// 将其他页面所需的变量定义
let state = {
    // 侧边栏的状态栏改变
    slider:{
        open: false,
        docked: true
    },
    // 聊天窗口机器人的对话列表
    chat:[
        {_id:'aa',content:'我们已经是好友了，开始聊天吧'}
    ],
}

// 导出store对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})