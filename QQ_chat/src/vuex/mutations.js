// 这是vuex的mutations层

import axios from 'axios'

import qs from 'qs'
const mutations = {
    // 点击头像将侧边栏进行显示隐藏的切换
    showSlider:(state,flag)=>{
        state.slider.open = !state.slider.open;
        state.slider.docked = !flag
    },
    sendMessage(state,val){
        val = encodeURIComponent(val)
        // 'https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?idx=0&format=js&n=1',
        axios.get('/v2'+val).then(res => {
            state.chat.push({_id:'aa',content:res.data.content})//机器人的聊天记录
        }).catch(err =>{
            console.log(err);
            alert('您的网络出错了哦')
        })
    }
}

export default mutations