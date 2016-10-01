'use strict'

import React, {Component} from 'react'

import LunchCrewJoinForm from './lunchCrewJoinForm'

export default (configuration, debug, browserHistory) => {
  class LunchCrewJoinPage extends Component {
    constructor (props) {
      super(props)

      this.state = {
        lunchCrewJoinForm: {
          lunchCrewName: ''
        }
      }

      this.lunchCrewJoinFormChange = this.lunchCrewJoinFormChange.bind(this)
      this.lunchCrewJoinFormSubmit = this.lunchCrewJoinFormSubmit.bind(this)
    }

    lunchCrewJoinFormChange (value) {
      this.setState(Object.assign({}, this.state, { lunchCrewJoinForm: value }))
    }

    lunchCrewJoinFormSubmit (event) {
      event.preventDefault()
      debug(`Submitted lunch crew create form with data: ${JSON.stringify(this.state.lunchCrewJoinForm)}`)
      browserHistory.push('/crew/' + this.state.lunchCrewJoinForm.lunchCrewName)
      return false
    }

    render () {
      return (
        <LunchCrewJoinForm onSubmit={this.lunchCrewJoinFormSubmit} onChange={this.lunchCrewJoinFormChange} value={this.state.lunchCrewJoinForm}/>
      )
    }
  }

  return LunchCrewJoinPage
}
