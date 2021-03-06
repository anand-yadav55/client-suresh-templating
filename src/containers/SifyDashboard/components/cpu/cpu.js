import React from 'react'
import PropTypes from 'prop-types'
import '../cpu.css'
import GaugeChart from 'react-gauge-chart'

function Cpu({ alarmsReceived = 9897, blackSpotsFound = 2439 }) {
  return (
    <div className="sify-cpul-0">
      <div
        className="sify-cpu-titles"
        style={{ fontSize: '18px', borderBottom: '4px solid #0000001f' }}
      >
        Highway Incident Intelligent Processing
      </div>
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
            <div className="sify-cpul-years1">Alarms</div>
            <div className="sify-cpul-years2">{alarmsReceived}</div>
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
          <div className="sify-cpul-years">
            <div className="sify-cpul-years1">Black Spots</div>
            <div className="sify-cpul-years2">{blackSpotsFound}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Cpu.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpu
