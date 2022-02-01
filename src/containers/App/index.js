import React, { Component } from 'react'
import { Layout } from 'antd'

import {
  BrowserRouter,
  // withRouter
} from 'react-router-dom'
import '../../App.css'
import SideMenu from './SideMenu'
import TopMenu from './TopMenu'
import logo from '../../assets/icons/icon.png'
import MainDrawer from './MainDrawer'
// import Router from '../Router';

const { Header, Sider, Content, Footer } = Layout

/**
 * Root/Template component
 */
class App extends Component {
  state = {
    collapsed: true,
    visible: true,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onIMSClicked = () => {
    this.setState({})
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  showPopup = () => {
    debugger
    this.showDrawer()
  }

  // isFullPageLoaded = () => {
  //   debugger;
  //   if (window.location.pathname == "/ims") {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    return (
      <BrowserRouter>
        <Layout className="bg">
          <>
            <Layout className="bg">
              <Header
                style={{ padding: '0px', height: '50px' }}
                className="bg-text-primary"
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'inherit',
                    justifyContent: 'center',
                  }}
                >
                  <TopMenu
                    toggleCollapsed={this.toggle}
                    isCollapsed={this.state.collapsed}
                    style={{ width: '100%' }}
                  />
                </div>
              </Header>
              <Layout>
                <Sider
                  collapsible
                  onCollapse={this.toggle}
                  collapsed={this.state.collapsed}
                  collapsedWidth={0}
                  style={{ textAlign: 'center' }}
                  trigger={null}
                  className="bg"
                  theme="dark"
                >
                  <span>
                    <img
                      className="logo"
                      alt=""
                      src={logo}
                      style={{ marginTop: '10px' }}
                    />
                  </span>

                  <SideMenu onClick={this.showPopup} />
                </Sider>

                <Layout>
                  <Content style={{ backgroundColor: 'white' }} className="bg">
                    <MainDrawer />
                  </Content>
                </Layout>
              </Layout>
              <Footer
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  left: '50%',
                  right: '50%',
                  background: 'transparent',
                  width: 'fit-content',
                  zIndex: '501',
                  bottom: '0',
                }}
                className="bg"
              >
                ITMS ©2020
              </Footer>
            </Layout>
          </>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
