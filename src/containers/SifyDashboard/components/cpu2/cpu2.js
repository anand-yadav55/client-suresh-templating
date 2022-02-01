import React from 'react'
import PropTypes from 'prop-types'
import './cpu2.css'
import '../cpu.css'
import GaugeChart from 'react-gauge-chart'

function Cpu({ lhs = 30, rhs = 45, minValue = 0, maxValue = 100 }) {
  return (
    <div className="sify-cpul-0">
      <div className="sify-cpu-titles">Lane Speed</div>
      <div className="sify-cpu-divider-2">
        <div className="sify-cpu2-subBox">
          <div className="sify-cpu2-head" style={{ width: '100%' }}>
            Left Hand Side
          </div>
          <div
            className="sify-cpu2-meter"
            style={{ width: '100%', marginTop: '1rem' }}
          >
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
        </div>
        <div className="sify-cpu2-subBox">
          <div className="sify-cpu2-head" style={{ width: '100%' }}>
            Right Hand Side
          </div>
          <div
            className="sify-cpu2-meter"
            style={{ width: '100%', marginTop: '1rem' }}
          >
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
            />{' '}
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
