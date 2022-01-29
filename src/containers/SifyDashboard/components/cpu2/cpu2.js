import React from 'react'
import PropTypes from 'prop-types'
import './cpu2.css'
// import ReactSpeedometer from 'react-d3-speedometer'
import { Gauge } from '@ant-design/plots'

function Cpu({ lhs = 30, rhs = 45, minValue = 0, maxValue = 100 }) {
  const config = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: '#30BF78',
      width: 12,
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
      },
      style: {
        fontSize: 60,
      },
    },
    gaugeStyle: {
      lineCap: 'round',
    },
  }
  return (
    <div className="sify-cpul-0">
      <div className="sify-cpu-titles">Lane Speed</div>
      <div className="sify-cpu-divider-2">
        <div className="sify-cpul-years">
          <div className="sify-cpul-years1" style={{ width: '100%' }}>
            Left Hand Side
          </div>
          <div
            className="sify-cpul-years2"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Gauge {...config} />;
            {/* <ReactSpeedometer
              width={170}
              forceRender={true}
              height={95}
              minValue={minValue}
              maxValue={maxValue}
              value={lhs}
            /> */}
          </div>
        </div>
        <div className="sify-cpul-years">
          <div className="sify-cpul-years1" style={{ width: '100%' }}>
            Right Hand Side
          </div>
          <div
            className="sify-cpul-years2"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Gauge {...config} />;
            {/* <ReactSpeedometer
              width={170}
              forceRender={true}
              height={95}
              minValue={minValue}
              maxValue={maxValue}
                value={rhs}
            /> */}
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
