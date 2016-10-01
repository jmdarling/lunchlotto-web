'use strict'

import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import lunchCrewJoinPageProvider from './pages/lunchCrewJoinPage/lunchCrewJoinPageProvider'
import LunchCrewRoomPage from './pages/lunchCrewRoomPage/lunchCrewRoomPage'

const LunchCrewJoinPage = lunchCrewJoinPageProvider(hashHistory)

function App () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={LunchCrewJoinPage}/>
      <Route path='/crew/:crewName' component={LunchCrewRoomPage}/>
    </Router>
  )
}

render(<App/>, document.getElementById('container'))
