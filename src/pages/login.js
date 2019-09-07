
import React, { Component } from 'react'
import styles from './login.css';
import { Login } from 'ant-design-pro';
import { connect } from 'dva';

const { UserName, Password, Submit } = Login;

@connect()
export default class extends Component { // 类形式组件，可持有状态
  onSubmit = (err, values) => {
    // console.log(err, values);
    if (!err) {
      // 登录成功
      const data = Object.assign({},values,{grant_type:'password',identificationCode:'123'})
      this.props.dispatch({type:"user/login",payload: data})
    }
  };
  render() {
    return (
      <div className={styles.loginForm}>
        {/* logo */}
        <img className={styles.logo}
          src={require('../images/logo.png')}
        />
        {/* 登录表单 */}
        <Login onSubmit={this.onSubmit}>
          <UserName 
            name="username"
            placeholder="请输入用户名"
            rules={[{require:true,message:"请输入用户名"}]}
          />
          <Password
          name="password"
          placeholder="请输入密码"
          rules={[{require:true, message:"请输入密码"}]}
          />
          <Submit>登录</Submit>
        </Login>
      </div>
    )
  }
}

