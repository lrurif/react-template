import React, { Component } from 'react'
import { Menu, message, Dropdown} from "antd"
import "./Header.scss"
const onClick = () => {
  message.info("click")
}
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">退出登录</Menu.Item>
    <Menu.Item key="2">修改密码</Menu.Item>
  </Menu>
);
export default class Header extends Component {
  render() {
    return (
      <div data-component="Header">
        <div className="header">
          <img className="left-img" src="https://oss.iuctrip.com/waishiyouchuan/waishiyouchuanyizhoutupian.png"/>
          <div className="right-area">
            <Dropdown overlay={menu} arrow={true} placement="bottomCenter">
              <div>
                <img src="https://oss.iuctrip.com/waishiyouchuan/default_avatar.png" className="avatar"/>
                <span>超级管理员</span>
              </div>
            </Dropdown>
            
          </div>
        </div>
      </div>
    )
  }
}
