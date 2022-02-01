import React from 'react'
import PropTypes from 'prop-types'
import './cpu5.css'
import { Area } from '@ant-design/plots'
import data from './data.json'

function Cpu5() {
  const configLineChart = {
    data: data,
    xField: 'year',
    yField: 'value',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',')
          })
        },
      },
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0.5:#598af0 1:#fff',
      }
    },
  }
  return (
    <div className="cpu5">
      <div className="sify-cpu-titles">Server Status</div>
      <div className="cpu5-grid">
        <div className="years">
          <div className="years1">Memory: </div>
          <div className="years2">&nbsp;{56}%</div>
        </div>
        <div className="years">
          <div className="years1">Disk: </div>
          <div className="years2">&nbsp;{10}%</div>
        </div>
        <div className="years">
          <div className="years1">CPU: </div>
          <div className="years2">&nbsp;{36}%</div>
        </div>
      </div>
      <div style={{ marginTop: '0.5rem' }} className="cpu5-chart">
        <Area {...configLineChart} />
      </div>
    </div>
  )
}

Cpu5.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpu5
