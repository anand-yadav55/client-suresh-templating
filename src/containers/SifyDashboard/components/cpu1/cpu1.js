import React from 'react'
import PropTypes from 'prop-types'
// import { Image } from 'antd'
import './cpu1.css'
import image from '../../assets/video.png'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

import '../cpu.css'
import GaugeChart from 'react-gauge-chart'

function Cpu1({
  totalIncidents = 58,
  laneSpeed = 8,
  greenChannelAmbulanceImage = image,
  policeCar = 32,
  ambulance = 16,
  fireTruck = 10,
}) {
  const data = [
    {
      vehicle: 'Police Car',
      Count: policeCar,
    },
    {
      vehicle: 'Ambulance',
      Count: ambulance,
    },
    {
      vehicle: 'Fire Truck',
      Count: fireTruck,
    },
    {
      vehicle: 'Public Transport',
      Count: 15,
    },
    {
      vehicle: 'Construction',
      Count: 3,
    },
  ]

  return (
    <div className="cpu1">
      <div className="sify-cpu-divider-2">
        <div className="sify-cpu-subBox">
          <div className="sify-cpul-years">
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={20}
              hideText={true}
              needleColor="#3498db"
              needleBaseColor="#3498db"
              arcWidth={0.2}
              colors={['#00C9FF', '#2980b9', '#92FE9D']}
              arcPadding={0.02}
              cornerRadius={3}
            />
          </div>

          <div className="sify-cpul-subBox-text-data">
            <div className="sify-cpul-years1">Total Incidents</div>
            <div className="sify-cpul-years2">{totalIncidents}</div>
          </div>
        </div>
        <div className="sify-cpu-subBox">
          <div className="sify-cpul-years">
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={20}
              hideText={true}
              needleColor="#3498db"
              needleBaseColor="#3498db"
              arcWidth={0.2}
              colors={['#00C9FF', '#2980b9', '#92FE9D']}
              arcPadding={0.02}
              cornerRadius={3}
            />
          </div>

          <div className="sify-cpul-subBox-text-data">
            <div className="sify-cpul-years1">lane speed</div>
            <div className="sify-cpul-years2">{laneSpeed}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="cpu1-bottom">
          <div className="sify-cpu-titles">Vehicle Statistics</div>
          <div style={{ height: '180px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis stroke="#19eaf4" dataKey="vehicle" />
                <PolarRadiusAxis angle={120} stroke="#fff" />
                <Radar
                  dataKey="Count"
                  stroke="#8884d8"
                  fill="#92fe9d"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="cpu1-vehicle-record">
            <div className="cpu1-vehicle">
              <span className="cpu1-vehicle-count">{policeCar}</span>
              <span className="cpu1-vehicle-data-title">Police Car</span>
            </div>
            <div className="cpu1-vehicle">
              <span className="cpu1-vehicle-count">{ambulance}</span>
              <span className="cpu1-vehicle-data-title">Ambulance</span>
            </div>
            <div className="cpu1-vehicle">
              <span className="cpu1-vehicle-count">{fireTruck}</span>
              <span className="cpu1-vehicle-data-title">Fire Truck</span>
            </div>
            <div className="cpu1-vehicle">
              <span className="cpu1-vehicle-count">{15}</span>
              <span className="cpu1-vehicle-data-title">Public Transport</span>
            </div>
            <div className="cpu1-vehicle">
              <span className="cpu1-vehicle-count">{3}</span>
              <span className="cpu1-vehicle-data-title">Construction</span>
            </div>
          </div>
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
