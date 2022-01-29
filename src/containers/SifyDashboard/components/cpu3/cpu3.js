import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Progress, Tooltip } from 'antd'
import './cpu3.css'

function createNewAlert(alertMessage = 'No Alerts!') {
  const crousel =
    document.querySelector('#cpu3-crousel') || document.createElement('div')
  const previousAlert =
    document.querySelector('#cpu3-crousel-element') ||
    document.createElement('div')
  previousAlert.style.transition = 'all ease-in-out 900ms'
  previousAlert.style.transform = 'translateY(-250%)'
  previousAlert.remove()

  const alert1 = document.createElement('div')
  alert1.innerText = alertMessage
  alert1.id = 'cpu3-crousel-element'
  alert1.style.transition = 'all ease-in-out 900ms'
  alert1.style.transform = 'translateY(250%)'
  // alert1.style.animation = 'bottomToCurrent 1s'
  setTimeout(() => {
    const alert1 =
      document.querySelector('#cpu3-crousel-element') ||
      document.createElement('div')
    alert1.style.transform = 'translateY(0%)'
  }, 900)
  // alert1.style.transform = 'translateY(0%)'
  crousel.innerHTML = ''
  crousel.append(alert1)
}

class Cpu3 extends Component {
  componentDidMount() {
    setTimeout(() => {
      createNewAlert('CCTV is DOWN')
    }, 5000)

    setTimeout(() => {
      createNewAlert('ATCC is DOWN')
    }, 10000)
  }

  render() {
    return (
      <div className="cpu3">
        <div className="sify-cpu-titles">Events and Alarm</div>
        <div className="graphy-parent">
          <div className="graphis" style={{ display: 'flex' }}>
            <div className="graphi">
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress
                  percent={80}
                  success={{ percent: 40 }}
                  width={55}
                  strokeWidth={10}
                  strokeColor={'#FF6666'}
                  type="circle"
                />
              </Tooltip>
            </div>
            <div className="colordes">
              <div className="coleach">
                <div className="colr"></div>
                <div className="cdes">vms</div>
              </div>
              <div className="coleach">
                <div className="colg"></div>
                <div className="cdes">cctv</div>
              </div>
              <div className="coleach">
                <div className="colw"></div>
                <div className="cdes">ecb</div>
              </div>
              <div className="coleach">
                <div className="cold"></div>
                <div className="cdes">atcc</div>
              </div>
              <div className="coleach">
                <div className="cold"></div>
                <div className="cdes">wms</div>
              </div>
            </div>
          </div>
          <div className="graphis">
            <div
              className="cpu3-crousel square-background-purple"
              id="cpu3-crousel"
            >
              <div id="cpu3-crousel-element">No Alerts!</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Cpu3.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpu3
