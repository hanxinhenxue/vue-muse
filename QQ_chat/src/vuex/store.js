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
    // 定义每个页面顶部的名字
    titleName:{
        index:'消息',
        linkMan:'联系人',
        status:'动态'
    },
    // 侧边栏的状态栏改变
    slider:{
        open: false,
        docked: true
    },
    // 聊天窗口机器人的对话列表
    robot1:[
        "哈喽，今天怎么样啊？"
    ]
}

// 导出store对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})