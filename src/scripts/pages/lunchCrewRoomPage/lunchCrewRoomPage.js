'use strict'

import React, {Component} from 'react'

export default class LunchCrewRoomPage extends Component {

  constructor (props) {
    super(props)
    console.log(JSON.stringify(props))
  }

  render () {
    return (
      <h1>LunchCrewRoom for {this.props.params.crewName}</h1>
    )
  }
}
