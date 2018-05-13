import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexbox from 'flexbox-react';
// import {Layout,
//
// Sider,
//  DatePicker,
// Content,
// Footer,} from "antd"
// import {Layout}, * as antd from "antd"
// import {Layout} from "antd"
// import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
// const { Header, Content, Footer } = Layout;
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// import antd from "antd"

// let {Layout}=antd
// import {Layout} from "antd"
// let Layout =antd.Layout
// console.log(" antd: ",antd);

const s ={
  blue: {backgroundColor:"blue"},
  red: {backgroundColor:"red"},
  black: {backgroundColor:"black"},
};


const TwoBy = (o) => {
  return (<Flexbox style={s.black}  flexGrow={2}>

  <Flexbox flexDirection="row" style={s.blue}  flexGrow={2}>
    Blue
</Flexbox>
  <Flexbox   flexDirection="row" style={s.red}  flexGrow={2}>
Red
</Flexbox>
  </Flexbox>)
}
class App extends Component {
//   renderz(){
//     return (<Layout>
//
//   <Layout>
//     <Sider>left sidebar</Sider>
//     <Content>main content</Content>
//     <Sider>right sidebar</Sider>
//   </Layout>
//   <Footer>footer</Footer>
// </Layout>)
//   }
state = {
   current: 'mail',
 }
 handleClick = (e) => {
   console.log('click ', e);
   this.setState({
     current: e.key,
   });
 }
  render() {
    return (<Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>)
  }
  // renderz() {
  //   // return (<antd.Layout>
  //   //     <antd.Layout.Header>
  //   //       In Header
  //   //   </antd.Layout.Header>
  //   //   </antd.Layout>)
  //   return (<Layout className="layout">
  //   <Header>
  //     <div className="logo" />
  //     <Menu
  //       theme="dark"
  //       mode="horizontal"
  //       defaultSelectedKeys={['2']}
  //       style={{ lineHeight: '64px' }}
  //     >
  //       <Menu.Item key="1">nav 1</Menu.Item>
  //       <Menu.Item key="2">nav 2</Menu.Item>
  //       <Menu.Item key="3">nav 3</Menu.Item>
  //     </Menu>
  //   </Header>
  //   <Content style={{ padding: '0 50px' }}>
  //     <Breadcrumb style={{ margin: '16px 0' }}>
  //       <Breadcrumb.Item>Home</Breadcrumb.Item>
  //       <Breadcrumb.Item>List</Breadcrumb.Item>
  //       <Breadcrumb.Item>App</Breadcrumb.Item>
  //     </Breadcrumb>
  //     <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
  //   </Content>
  //   <Footer style={{ textAlign: 'center' }}>
  //     Ant Design ©2016 Created by Ant UED
  //   </Footer>
  // </Layout>)
  // }
  renderz() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
 {/* <DatePicker /> */}


          <Flexbox flexDirection="column" minHeight="100vh">
            <Flexbox element="header" height="60px">
              Header
            </Flexbox>

            <Flexbox style={s.black}  flexGrow={2}>
              Content

            </Flexbox>

            <Flexbox style={s.black}  flexGrow={2}>

          <Flexbox   flexDirection="row" style={s.blue}  flexGrow={2}>
        Blue
        </Flexbox>
          <Flexbox   flexDirection="row" style={s.red}  flexGrow={2}>
        Red
        </Flexbox>
          </Flexbox>
            <Flexbox element="footer" height="60px">
              Footer
            </Flexbox>
          </Flexbox>
      </div>
    );
  }
}

export default App;
