import React, { Component } from 'react'
import Cpu from './components/cpu/cpu'
import Cpu1 from './components/cpu1/cpu1'
import Cpu2 from './components/cpu2/cpu2'
import Cpu3 from './components/cpu3/cpu3'
import Cpu4 from './components/cpu4/cpu4'
import Cpu5 from './components/cpu5/cpu5'
import Cpur from './components/cpur/cpur'
import Cpur2 from './components/cpur2/cpur2'
import Cpur3 from './components/cpur3/cpur3'
import Cpur4 from './components/cpur4/cpur4'
import MainTop from './components/maintop/maintop'
import Map from '../Map/index'
import './index.css'
import { data as cpur3Data } from './data/cpur3.json'
import cpur4Image from './assets/video.png'
import { Skeleton, message } from 'antd'

class SifyDashboard extends Component {
  state = {
    cpu: false,
    cpu1: false,
    cpu2: false,
    cpu3: false,
    cpu4: false,
    cpu5: false,
    cpur: false,
    cpur2: false,
    cpur3: false,
    cpur4: false,
    alarmsReceived: 2852,
    capturedByVideo: 512,
    totalIncidents: 52,
    laneSpeed: 23,
    policeCar: 32,
    ambulance: 16,
    fireTruck: 10,
    bike: 1234,
    auto: 17979,
    car: 3500,
    lcv: 3546,
    trucks: 3497,
    mav: 8696,
    bus: 2468,
    agriVehicles: 357,
    ecb: {
      alerts: 21,
      ecbCount: 18,
      completedCalls: 1500,
      missedCalls: 500,
      callsInQueue: 500,
    },
  }

  addNewCallInQueue = () => {
    let ecb = this.state.ecb
    let num = Math.ceil(Math.random() * 3)
    if (num === 1) {
      ecb.callsInQueue += 1
      message.warning("There's a new Call")
    } else if (num === 2) {
      ecb.completedCalls += 1
      ecb.callsInQueue -= 1
      message.success('You completed a Call')
    } else {
      ecb.missedCalls += 1
      message.error('You missed a Call')
    }
    this.setState({ ecb })
  }

  componentDidMount() {
    // let showECBCards = this.props.showECBCards === false ? false : true
    // if (showECBCards) {
    //   setTimeout(this.addNewCallInQueue, 10000)
    //   setTimeout(this.addNewCallInQueue, 20000)
    //   setTimeout(this.addNewCallInQueue, 40000)
    //   setTimeout(this.addNewCallInQueue, 100000)
    // }

    setTimeout(() => {
      this.setState({
        cpu: true,
        cpu2: true,
        cpu3: true,
        cpu5: true,
        cpur2: true,
        cpur4: true,
      })
    }, 1000)
    setTimeout(() => {
      this.setState({
        cpu1: true,
        cpu4: true,
        cpur: true,
        cpur3: true,
      })
    }, 1500)
  }

  render() {
    return (
      <div className="sify">
        <div className="sify-cpu sify-cpul">
          {this.state.cpu ? (
            <Cpu
              alarmsReceived={this.state.alarmsReceived}
              blackSpotsFound={this.state.capturedByVideo}
            />
          ) : (
            <Skeleton />
          )}
          {this.state.cpu1 ? (
            <Cpu1
              totalIncidents={this.state.totalIncidents}
              laneSpeed={this.state.laneSpeed}
              policeCar={this.state.policeCar}
              ambulance={this.state.ambulance}
              fireTruck={this.state.fireTruck}
              // greenChannelAmbulanceImage={image}
            />
          ) : (
            <Skeleton />
          )}
          {this.state.cpu2 ? <Cpu2 /> : <Skeleton />}
          {this.state.cpu3 ? <Cpu3 /> : <Skeleton />}
          {this.state.cpu4 ? (
            <Cpu4
              bike={this.state.bike}
              auto={this.state.auto}
              car={this.state.car}
              lcv={this.state.lcv}
              trucks={this.state.trucks}
              mav={this.state.mav}
              bus={this.state.bus}
              agriVehicles={this.state.agriVehicles}
            />
          ) : (
            <Skeleton />
          )}
          {this.state.cpu5 ? <Cpu5 /> : <Skeleton />}
        </div>
        <div className="sify-map">
          <Map />
        </div>
        <div className="sify-cpu sify-cpur">
          {this.state.cpur ? (
            <Cpur
              weatherIcon={{
                icon: ['fas', 'sun'],
                className: 'spin',
                style: { fontSize: '3.5rem' },
                color: 'gold',
              }}
              temperature={24}
              temperatureFeelsLike={23}
              maxTemperature={26}
              windSpeed={10}
              humidity={93}
              hPa={64}
              visibility={12.75}
              sunset="Tue 8:12 PM"
              sunrise="Tue 5:59 AM"
            />
          ) : (
            <Skeleton />
          )}
          {this.state.cpur2 ? (
            <Cpur2
              vmsMessages={[
                'Dont drink and drive',
                'Drive safely family is in wating',
                'Work in progress go slowly',
                'Dont use mobile while driving',
              ]}
            />
          ) : (
            <Skeleton />
          )}
          {this.state.cpur3 ? (
            <Cpur3 data={cpur3Data} {...this.state.ecb} />
          ) : (
            <Skeleton />
          )}
          {this.state.cpur4 ? (
            <Cpur4 images={[cpur4Image, cpur4Image, cpur4Image, cpur4Image]} />
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="sify-maintop">
          <MainTop />
        </div>
      </div>
    )
  }
}

export default SifyDashboard
