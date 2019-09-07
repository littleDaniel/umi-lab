// 所有跟服务器打交道的都是在模型层
import request from '../utils/request'
import router from 'umi/router'
import axios from 'axios'
const userinfo = JSON.parse(localStorage.getItem('userinfo')) || {
    access_token: '',
    refresh_token: '',
    expires_in: 0
}
// 登录请求方法
function login({username,password,grant_type,identificationCode}) {
    return request({
        url: '/edu-auth-center/authorize',
        method: 'post',
        params: {
            valid_time: 'ONE_MONTH',
            grant_type,
            username,
            password,
            identificationCode
          },
        transformRequest:[function () {
            return JSON.stringify({username, password, identificationCode})
        }]
    })
    // return axios.post("/edu-auth-center/authorize", payload);
}
export default {
    namespace: 'user',
    state: userinfo,
    effects: { // 可进行异步处理
        *login({payload}, {call,put}) { // 此处payload是入参
            try {
                const userinfo = yield call(login, payload);
            //    if (+code == 0) {
                    localStorage.setItem('userinfo',JSON.stringify(userinfo))
                    yield put({type:'init', payload: userinfo}) // 此处payload是返参
                    router.push('/')
            //    }
            } catch (error) {
           }
          
        }
    },
    reducers: { // 状态更新
        init(state, action) {
            return action.payload;
        }
    }
}