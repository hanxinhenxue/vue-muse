// 这是vuex的mutations层
import axios from 'axios'
const mutations = {
    // 点击头像将侧边栏进行显示隐藏的切换
    showSlider:(state,flag)=>{
        state.slider.open = !state.slider.open;
        state.slider.docked = !flag
    },
    sendMessage(val){
        let mess = {
            perception:{
                inputText:{
                    text:val
                }
            },
            userInfo:{
                apiKey: '2d7071f2e88e409f83ce233bf11c7824',
                userId:123456
            }

        }

        
        axios.post('http://openapi.tuling123.com/openapi/api/v2',JSON.stringify(mess)).then(res =>{
            console.log(res);
            
        })

    }
}

export default mutations