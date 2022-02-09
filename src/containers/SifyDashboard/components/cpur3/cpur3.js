import React from 'react'
import PropTypes from 'prop-types'
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './cpur3.css'
// import { Area } from '@ant-design/charts'

function Cpur3({
  alerts,
  ecbCount,
  completedCalls,
  missedCalls,
  callsInQueue,
}) {
  // var config = {
  //   data: data,
  //   xField: 'ecb',
  //   yField: 'alerts',
  //   height: 'auto',
  //   width: 'auto',
  // }

  return (
    <div className="cpur cpur3">
      <div className="sify-cpu-titles">ECB Management</div>
      <div className="cpur3-ecb">
        <div className="cpur3-ecb-sub">
          <div className="cpur3-sub1">
            <span className="years1">Alerts :</span>{' '}
            <span className="years2">{alerts}</span>
          </div>
          <div className="cpur3-sub2">
            <span className="years1">No ECBs :</span>{' '}
            <span className="years2">{ecbCount}</span>
          </div>
        </div>
        <div className="cpur3-ecb-sub">
          <div className="cpur3-sub1">
            <span className="years1">Call Volume :</span>{' '}
            <span className="years2">
              {completedCalls + missedCalls + callsInQueue}
            </span>
          </div>
          <div className="cpur3-sub2">
            <span className="years1">Completed Calls :</span>{' '}
            <span className="years2">{completedCalls}</span>
          </div>
        </div>
        <div className="cpur3-ecb-sub">
          <div className="cpur3-sub1">
            <span className="years1">Missed Calls :</span>{' '}
            <span className="years2">{missedCalls}</span>
          </div>
          <div className="cpur3-sub2">
            <span className="years1">Calls in queue :</span>{' '}
            <span className="years2">{callsInQueue}</span>
          </div>
        </div>
        {/* <div className="cpur3-chart">
          <Area {...config} />
        </div> */}
      </div>
    </div>
  )
}

Cpur3.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpur3
