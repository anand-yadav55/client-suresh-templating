import React from 'react'
import PropTypes from 'prop-types'
// import { Image } from 'antd'
import './cpu1.css'
import image from '../../assets/video.png'

function Cpu1({
  totalIncidents = 58,
  laneSpeed = 8,
  greenChannelAmbulanceImage = image,
  policeCar = 32,
  ambulance = 16,
  fireTruck = 10,
}) {
  return (
    <div className="cpu1">
      <div>
        <div className="cpu1-years">
          <div className="cpu1-pdes">
            <div className="cpu1-des">Total Incidents</div>
            <div className="cpu1-num">{totalIncidents}</div>
          </div>
          <div className="cpu1-pdes">
            <div className="cpu1-des">lane speed</div>
            <div className="cpu1-num">{laneSpeed}</div>
          </div>
        </div>
        <div className="cpu1-years">
          {/* <div className="cpu1-desimg">Green Channel for Ambulance</div> */}
          {/* <div>
            <Image
              className="cpu1-videoimg"
              src={greenChannelAmbulanceImage}
              alt=""
            />
          </div> */}
        </div>
      </div>
      <div className="cpu1-bottom">
        <div>
          <span className="cpu1-color cpu1-des cpu1-bottom-des">
            Police Car
          </span>{' '}
          <span className="cpu1-num">{policeCar}</span>
        </div>
        <div>
          <span className="cpu1-color cpu1-des cpu1-bottom-des">Ambulance</span>{' '}
          <span className="cpu1-num">{ambulance}</span>
        </div>
        <div>
          <span className="cpu1-color cpu1-des cpu1-bottom-des">
            Fire Truck
          </span>{' '}
          <span className="cpu1-num">{fireTruck}</span>
        </div>
      </div>
    </div>
  )
}

Cpu1.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpu1
