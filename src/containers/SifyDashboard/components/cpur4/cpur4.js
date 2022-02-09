import React from 'react'
import PropTypes from 'prop-types'
import './cpur4.css'
import { Image } from 'antd'

function Cpur4({ images = [] }) {
  return (
    <div className="cpur cpur4">
      <div className="sify-cpu-titles">Video Surveillance System</div>
      <div className="cpur4-vss">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} className="cpur4-img" alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

Cpur4.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpur4
