import React from 'react'

export const getRouteName = (path) => {
  const paths = {
    '/vms': <b>VIRTUAL MESSAGING SYSTEM</b>,
    '/cctv': <b>CCTV</b>,
    '/ims': <b>INCIDENT MANAGEMENT SYSTEM</b>,
    '/parking': <b>PARKING MANAGEMENT SYSTEM</b>,
    '/beacons': <b>BEACONS</b>,
  }
  return paths[path]
}
