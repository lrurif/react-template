import React, { Component } from 'react'
import { connect } from "react-redux"
import  { setToken } from "../store/action/token"
import { Button } from "antd"
class Login extends Component {
  login = () => {
    this.props.setToken(Math.random().toString())
  }
  render() {
    console.log(this);
    return (
      <div>
        登录页内容
        {this.props.token}
        <Button onClick={this.login}>登录</Button>
      </div>
    )
  }
}
export default connect(
  state => ({
    token: state.token
  }),
  {
    setToken
  }
)(Login)