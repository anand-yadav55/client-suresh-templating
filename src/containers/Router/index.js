import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SifyDashboard from '../SifyDashboard/index'

/**
 * React router configuration
 */
export default () => (
  <Switch>
    <Route exact path="/" component={SifyDashboard} />
  </Switch>
)
