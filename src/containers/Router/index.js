import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SifyDashboard from '../SifyDashboard/index'
import MapPage from '../MapPage'

/**
 * React router configuration
 */
export default () => (
  <Switch>
    <Route exact path="/" component={SifyDashboard} />
    <Route path="/map" component={MapPage} />
  </Switch>
)
