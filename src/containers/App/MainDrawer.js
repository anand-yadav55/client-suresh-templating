import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Drawer } from 'antd'

import Router from '../Router'
import { getRouteName } from '../../utils/routes'
// import Dashboard from "../Dashboard";
import SifyDashboard from '../SifyDashboard/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import {faTint, faMapMarkerAlt, faCloudSunRain, faCloudSun,faEye, faThermometer, faWind, faSun,faPowerOff, faCompass, faThermometerThreeQuarters,faBatteryEmpty, faBatteryFull, faBatteryQuarter, faBatteryThreeQuarters, faBatteryHalf, faTimesCircle, faCheckCircle} from "@fortawesome/free-solid-svg-icons"
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab)

class MainDrawer extends Component {
  static propTypes = {}

  state = {
    collapsed: true,
    visible: true,
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.showDrawer()
    }
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

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  isDrawerRequired = () => {
    if (this.props.location.pathname !== '/') {
      return true
    } else {
      return false
    }
  }

  isFullPageLoaded = () => {
    if (
      this.props.location.pathname.includes('reports') ||
      this.props.location.pathname.includes('drone') ||
      this.props.location.pathname.includes('ims') ||
      this.props.location.pathname.includes('map') ||
      this.props.location.pathname.includes('dash-2') ||
      this.props.location.pathname.includes('assets')
    ) {
      return true
    }
    return false
  }

  render() {
    const props = this.props
    return this.isDrawerRequired() && !this.isFullPageLoaded() ? (
      <>
        <SifyDashboard showECBCards={false} />
        {/* <Dashboard /> */}
        <Drawer
          title={getRouteName(props.location.pathname)}
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          width={520}
        >
          {/* <Camera /> */}
          <Router />
        </Drawer>
      </>
    ) : (
      <Router />
    )
  }
}

export default withRouter(MainDrawer)
