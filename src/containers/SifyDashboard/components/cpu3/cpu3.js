import React, { Component } from 'react'
import Donut from './DonutChart'
import './cpu3.css'

export default function Cpu3() {
  return (
    <div className="cpu3">
      <div className="sify-cpu-titles">Events and Alarm</div>
      <div className="graphy-parent">
        <div className="graphis">
          <div className="graphi">
            <Donut />
          </div>
          <div className="colordes">
            <div className="coleach">
              <div className="colr"></div>
              <div className="cdes">vms</div>
            </div>
            <div className="coleach">
              <div className="colg"></div>
              <div className="cdes">cctv</div>
            </div>
            <div className="coleach">
              <div className="colw"></div>
              <div className="cdes">ecb</div>
            </div>
            <div className="coleach">
              <div className="cold"></div>
              <div className="cdes">atcc</div>
            </div>
            <div className="coleach">
              <div className="cold2"></div>
              <div className="cdes">wms</div>
            </div>
          </div>
        </div>
        <div className="graphis">
          <div
            className="cpu3-crousel square-background-purple"
            id="cpu3-crousel"
          >
            <div id="cpu3-crousel-element">No Alerts!</div>
          </div>
        </div>
      </div>
    </div>
  )
}
