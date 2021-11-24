import React, { Component } from "react";
import "./Home.scss";
import Header from "./components/Header/Header";
import { Menu } from "antd";
import { PieChartOutlined, MailOutlined } from "@ant-design/icons";
import {  useHistory } from "react-router-dom";
import { renderRoutes} from "react-router-config"
import { connect } from "react-redux"
import  { setToken } from "../../store/action/token"
function LeftMenu() {
  const history = useHistory()
  function selectChanged({ item, key}) {
    history.push(key)
    console.log(item, key);
  }
  return (
    <Menu mode="inline" theme="dark" onSelect={selectChanged}>
      <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="首页概览">
        <Menu.Item key="/home/index">数据看板</Menu.Item>
        <Menu.Item key="/home/TransactionData">交易数据</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="1" icon={<PieChartOutlined />} disabled>
        设置
      </Menu.Item>
    </Menu>
  );
}
class Home extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div data-component="Home">
        <Header />
        <div className="home-container">
          <div className="left-area">
            <LeftMenu />
          </div>
          <div className="right-area">
            {renderRoutes(this.props.route.routes)}
            
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    token: state.token
  }),
  {
    setToken
  }
)(Home)
