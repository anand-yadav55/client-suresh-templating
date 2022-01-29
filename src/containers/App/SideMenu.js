import React, { Component } from 'react'

import {
  // AlertOutlined,
  // CarOutlined,
  ExclamationOutlined,
  NumberOutlined,
  TableOutlined,
  VideoCameraOutlined,
  AuditOutlined,
  LineChartOutlined,
  HomeOutlined,
  AntCloudOutlined,
  DingtalkOutlined,
  // MediumOutlined,
} from '@ant-design/icons'

import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/icons/icon.png'

// const MenuItemGroup = Menu.ItemGroup;

class SideMenu extends Component {
  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        selectedKeys={this.props.location.pathname}
        className="bg _sidemenu"
      >
        <Menu.Item key="/dashboard">
          <Link to="/" className="bg-text-sdark">
            <HomeOutlined />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/map">
          <Link to="/map" className="bg-text-sdark">
            <img
              alt=""
              className="anticon"
              width="14px"
              height="14px"
              src={logo}
            />
            <span>Map</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/cctv">
          <Link to="/cctv" className="bg-text-sdark">
            <VideoCameraOutlined />
            <span>CCTV</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/vms">
          <Link to="/vms" className="bg-text-sdark">
            <TableOutlined />
            <span>VMS</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/ims">
          <Link to="/ims" className="bg-text-sdark">
            <ExclamationOutlined />
            <span>IMS</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/wis">
          <Link to="/wis" className="bg-text-sdark">
            <AntCloudOutlined />
            <span>WIS</span>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="/parking">
          <Link to="/parking" className="bg-text-sdark">
            <CarOutlined />
            <span>Parking</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/beacons">
          <Link to="/beacons" className="bg-text-sdark">
            <AlertOutlined />
            <span>Beacons</span>
          </Link>
        </Menu.Item> */}
        <Menu.Item key="/ecb">
          <Link to="/ecb" className="bg-text-sdark">
            <img
              alt=""
              className="anticon"
              width="14px"
              height="14px"
              src="/images/ecb-square.svg"
            />
            <span>ECB</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/atcc">
          <Link to="/atcc" className="bg-text-sdark">
            <NumberOutlined />
            <span>ATCC</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/assets">
          <Link to="/assets" className="bg-text-sdark">
            <AuditOutlined />
            <span>Assets</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/reports">
          <Link to="/reports" className="bg-text-sdark">
            <LineChartOutlined />
            <span>Reports</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/drone">
          <Link to="/drone" className="bg-text-sdark">
            <DingtalkOutlined />
            <span>Drone</span>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="/meta-assets">
          <Link to="/meta-assets">
          <MediumOutlined />
            <span>AssetManagement</span>
          </Link>
        </Menu.Item> */}
      </Menu>
    )
  }
}

export default withRouter(SideMenu)
