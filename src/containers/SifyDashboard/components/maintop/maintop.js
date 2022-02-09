import React from 'react'
import PropTypes from 'prop-types'
import './maintop.css'

function Maintop({ usage = 0, space = 0, cpu = 0, data }) {
  return (
    <div className="maintop">
      <div className="maintop-shadow"></div>
      <div className="esch">
        <div className="view">
          <div className="viewtitle">Total Traffic</div>
          <div className="nums">
            <div className="num">4</div>
            <div className="num">6</div>
            <div className="num">0</div>
            <div className="num">3</div>
          </div>
          <div className="rise">
            <div className="triangle_up"></div>
            <div className="risevolume">+0.67</div>
          </div>
        </div>

        <div className="view">
          <div className="viewtitle">Cenic Traffic</div>
          <div className="nums">
            <div className="num">1</div>
            <div className="num">8</div>
            <div className="num">0</div>
            <div className="num">1</div>
          </div>
          <div className="rise">
            <div className="triangle_down"></div>
            <div className="risevolume">-0.03</div>
          </div>
        </div>

        <div className="view">
          <div className="viewtitle">Exper Traffic</div>
          <div className="nums">
            <div className="num">2</div>
            <div className="num">2</div>
            <div className="num">4</div>
            <div className="num">6</div>
          </div>
          <div className="rise">
            <div className="triangle_up"></div>
            <div className="risevolume">-0.34</div>
          </div>
        </div>

        <div className="view">
          <div className="viewtitle">Detay Traffic</div>
          <div className="nums">
            <div className="num">2</div>
            <div className="num">0</div>
          </div>
          <div className="rise">
            <div className="triangle_down"></div>
            <div className="risevolume">-0.08</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Maintop.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Maintop
