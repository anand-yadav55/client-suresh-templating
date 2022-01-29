import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// black spot found :- done
// total incidents :- done
// lane speed :- done
// VMS bold and capitalize and single msg in a vms :- done
// vms cctv ecb atcc wms :- done
// scroller from bottom to top in events and alarm :- done
// connection status camera :- done
// new section server status : memory status, disk status, load analyser, :- done
// vms name, connection, status, location, select msg -- dropdown + push msg :- done
// only show one msg in one vms :- done
