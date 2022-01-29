import React from 'react'
import './cpu4.css'

export default function Cpu4({
  bike,
  auto,
  car,
  lcv,
  trucks,
  mav,
  bus,
  agriVehicles,
}) {
  return (
    <div className="cpu4">
      <div className="sify-cpu-titles">Traffic Situation Perception</div>
      <div className="cpu4-grid">
        <div className="years">
          <div className="years1">Bike</div>
          <div className="years2">{bike}</div>
        </div>
        <div className="years">
          <div className="years1">Auto</div>
          <div className="years2">{auto}</div>
        </div>
        <div className="years">
          <div className="years1">Car</div>
          <div className="years2">{car}</div>
        </div>
        <div className="years">
          <div className="years1">LCV</div>
          <div className="years2">{lcv}</div>
        </div>
        <div className="years">
          <div className="years1">Trucks</div>
          <div className="years2">{trucks}</div>
        </div>
        <div className="years">
          <div className="years1">MAV</div>
          <div className="years2">{mav}</div>
        </div>
        <div className="years">
          <div className="years1">Bus</div>
          <div className="years2">{bus}</div>
        </div>
        <div className="years">
          <div className="years1">Agri.Veh</div>
          <div className="years2">{agriVehicles}</div>
        </div>
      </div>
    </div>
  )
}
