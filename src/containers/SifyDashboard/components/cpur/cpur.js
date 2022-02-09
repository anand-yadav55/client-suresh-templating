import React from 'react'
import PropTypes from 'prop-types'
import './cpur.css'
import {
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiWindy,
  WiFog,
  WiHumidity,
  WiBarometer,
  WiSprinkle,
} from 'weather-icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
// import ReactAnimatedWeather from 'react-animated-weather'

function Cpur({
  weatherIcon,
  temperature,
  temperatureFeelsLike,
  maxTemperature,
  windSpeed,
  humidity,
  hPa,
  visibility,
  sunset,
  sunrise,
}) {
  return (
    <div className="cpur">
      <div
        className="sify-cpu-titles"
        style={{ fontSize: '18px', borderBottom: '4px solid #0000001f' }}
      >
        Weather Monitoring System
      </div>
      <div className="cpur-weather">
        <div className="cpur-weather-icon">
          <FontAwesomeIcon {...weatherIcon} />
        </div>
        <div></div>
        <div className="cpur-weather-temp">
          <div className="cpur-weather-temp-now">{temperature} &deg;C</div>
          <div>Feels like {temperatureFeelsLike} &deg;C</div>
        </div>
      </div>
      <div className="cpur-weather-bottom">
        <div className="cpur-weather-lbottom">
          <div className="cpur-icon">
            <WiThermometer size="24" /> Max today {maxTemperature} &deg; C
          </div>
          <div className="cpur-icon">
            <WiWindy size="24" /> W {windSpeed} km/h
          </div>
          <div className="cpur-icon">
            <WiFog size="24" /> {visibility} KM
          </div>
          <div className="cpur-icon">
            <WiSunset size="24" /> {sunset}
          </div>
          {/* </div>
        <div className="cpur-weather-rbottom"> */}
          <div className="cpur-icon">
            <WiSprinkle size="24" /> {humidity}%
          </div>
          <div className="cpur-icon">
            <WiHumidity size="24" /> {humidity}%
          </div>
          <div className="cpur-icon">
            <WiBarometer size="24" /> {hPa} hPa
          </div>
          <div className="cpur-icon">
            <WiSunrise size="24" /> {sunrise}
          </div>
        </div>
      </div>
    </div>
  )
}

Cpur.propTypes = {
  data: PropTypes.array,
  usage: PropTypes.number,
  space: PropTypes.number,
  cpu: PropTypes.number,
}

export default Cpur
