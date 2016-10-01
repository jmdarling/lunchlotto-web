'use strict'

import 'whatwg-fetch'

import debugProvider from 'debug'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import configuration from './configuration'
import lunchCrewJoinPageProvider from './pages/lunchCrewJoinPage/lunchCrewJoinPageProvider'
import lunchCrewRoomPageProvider from './pages/lunchCrewRoomPage/lunchCrewRoomPageProvider'

const debugKey = 'lunchlotto'
window.localStorage.debug = debugKey
const debug = debugProvider(debugKey)

const LunchCrewJoinPage = lunchCrewJoinPageProvider(configuration, debug, hashHistory)
const LunchCrewRoomPage = lunchCrewRoomPageProvider(configuration, debug, hashHistory)

function App () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={LunchCrewJoinPage}/>
      <Route path='/crew/:crewName' component={LunchCrewRoomPage}/>
    </Router>
  )
}

render(<App/>, document.getElementById('container'))
