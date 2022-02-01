import React, { Component } from 'react'
import {
  MenuOutlined,
  LeftOutlined,
  BellOutlined,
  AppstoreOutlined,
  TableOutlined,
  ExclamationOutlined,
  NumberOutlined,
  VideoCameraOutlined,
  AuditOutlined,
  LineChartOutlined,
  HomeOutlined,
  AntCloudOutlined,
  DingtalkOutlined,
} from '@ant-design/icons'

import { Menu, Modal, Row, Col } from 'antd'
import { LiveDateTime } from '../../utils/react-utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import smallLogo from '../../assets/icons/icon_small.png'

function LogOutMsg() {
  Modal.info({
    title: 'Log-out',
    content: (
      <div>
        <p>Log-out under Construction! Sorry for Inconvenience :-(</p>
      </div>
    ),
    onOk() {},
  })
}

export default class TopMenu extends Component {
  state = {
    current: 'mail',
    theme: 'light',
  }

  handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <Row className="bg _topmenu">
        <Col style={{ width: '50%', justifyContent: 'flex-start' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span
              onClick={this.props.toggleCollapsed}
              style={{
                margin: '0 10px',
                marginLeft: '15px',
                height: '100%',
                width: 'fit-content',
                fontSize: '20px',
                opacity: '0.8',
              }}
            >
              {React.createElement(
                this.props.isCollapsed ? MenuOutlined : LeftOutlined,
              )}
            </span>
            <span>
              <img
                className="logo"
                alt=""
                src={smallLogo}
                style={{ height: '50px', width: '50px', margin: '10px' }}
              />
              <span className="header-title">ITMS</span>
            </span>
          </span>
        </Col>
        <Col style={{ width: '50%', justifyContent: 'flex-end' }}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            className="bg _topmenu"
            mode="horizontal"
          >
            <Menu.Item key="date-time">
              <LiveDateTime />
            </Menu.Item>
            <Menu.SubMenu
              title={<AppstoreOutlined style={{ fontSize: '1.25rem' }} />}
              mode="horizontal"
            >
              <div className="submenu">
                <div className="submenu-item">
                  <a href="/" className="bg-text-sdark submenu-item-content">
                    <div>
                      <HomeOutlined />
                      <span>Dashboard</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a
                    href="/cctv"
                    className="bg-text-sdark submenu-item-content"
                  >
                    <div>
                      <VideoCameraOutlined />
                      <span>CCTV</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a href="/ims" className="bg-text-sdark submenu-item-content">
                    <div>
                      <ExclamationOutlined />
                      <span>IMS</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a href="/vms" className="bg-text-sdark submenu-item-content">
                    <div>
                      <TableOutlined />
                      <span>VMS</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a href="/wis" className="bg-text-sdark submenu-item-content">
                    <div>
                      <AntCloudOutlined />
                      <span>WIS</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a
                    href="/atcc"
                    className="bg-text-sdark submenu-item-content"
                  >
                    <div>
                      <NumberOutlined />
                      <span>ATCC</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a
                    href="/assets"
                    className="bg-text-sdark submenu-item-content"
                  >
                    <div>
                      <AuditOutlined />
                      <span>Assets</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a
                    href="/reports"
                    className="bg-text-sdark submenu-item-content"
                  >
                    <div>
                      <LineChartOutlined />
                      <span>Reports</span>
                    </div>
                  </a>
                </div>
                <div className="submenu-item">
                  <a
                    href="/drone"
                    className="bg-text-sdark submenu-item-content"
                  >
                    <div>
                      <DingtalkOutlined />
                      <span>Drone</span>
                    </div>
                  </a>
                </div>
              </div>
            </Menu.SubMenu>

            <Menu.SubMenu
              title={<BellOutlined style={{ fontSize: '1.25rem' }} />}
              key="/bell"
              style={{ textAlign: 'center' }}
            >
              <Menu.Item key="1">
                <p>Test Notification is Here 1</p>
              </Menu.Item>
              <Menu.Item key="2">
                <p>Test Notification is Here 2</p>
              </Menu.Item>
              <Menu.Item key="3">
                <p>Test Notification is Here 3</p>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="alipay">
              <span
                onClick={LogOutMsg}
                rel="noreferrer"
                className="bg-text-primary "
              >
                <FontAwesomeIcon
                  icon={['fa', 'power-off']}
                  style={{ fontSize: '1.1rem' }}
                />
              </span>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    )
  }
}
