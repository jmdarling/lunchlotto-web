'use strict'

import 'whatwg-fetch'

import debugProvider from 'debug'
import io from 'socket.io-client'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import configuration from './configuration'
import lunchCrewJoinPageProvider from './pages/lunchCrewJoinPage/lunchCrewJoinPageProvider'
import lunchCrewRoomPageProvider from './pages/lunchCrewRoomPage/lunchCrewRoomPageProvider'

const debugKey = 'lunchlotto'
window.localStorage.debug = debugKey
const debug = debugProvider(debugKey)

const ioClient = io(configuration.serverUrl)

ioClient.on('connect', () => debug('Socket connected.'))
ioClient.on('error', error => debug(`Socket failed to connect with error ${JSON.stringify(error)}`))
ioClient.on('disconnect', () => debug('Socket disconnected.'))
ioClient.on('reconnecting', attemptsCount => debug(`Socket attepmting to reconnect. Attempt ${attemptsCount}.`))
ioClient.on('reconnect_error', error => debug(`Socket failed to reconnect with error ${JSON.stringify(error)}.`))
ioClient.on('reconnect_failure', () => debug('Failed to reconnect after reaching the maximum number of attempts.'))

const LunchCrewJoinPage = lunchCrewJoinPageProvider(configuration, debug, hashHistory, ioClient)
const LunchCrewRoomPage = lunchCrewRoomPageProvider(configuration, debug, hashHistory, ioClient)

function App () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={LunchCrewJoinPage}/>
      <Route path='/crew/:crewName' component={LunchCrewRoomPage}/>
    </Router>
  )
}

render(<App/>, document.getElementById('container'))
