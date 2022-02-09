import React from 'react'
import PropTypes from 'prop-types'
import './cpur2.css'
import { Carousel } from 'antd'

function Cpur2({ vmsMessages = [] }) {
  return (
    <div className="cpur cpur2">
      <div className="sify-cpu-titles">VMS Messaging</div>
      <Carousel autoplay>
        {vmsMessages.map((message, index) => {
          return (
            <div
              className="cpur2-vms square-background-purple"
              key={index}
              style={{
                display: 'flex',
              }}
            >
              {message}
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

Cpur2.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpur2
