'use strict'

import React, {Component, PropTypes} from 'react'

import DestinationList from './destinationList'
import DestinationAddForm from './destinationAddForm'

export default (configuration, debug, browserHistory) => {
  class LunchCrewRoomPage extends Component {

    constructor (props) {
      super(props)

      this.state = {
        destinations: [],
        selectedDestination: '',
        destinationAddForm: {
          destinationName: ''
        }
      }

      this.destinationAddFormChange = this.destinationAddFormChange.bind(this)
      this.destinationAddFormSubmit = this.destinationAddFormSubmit.bind(this)
      this.updateDestinations = this.updateDestinations.bind(this)

      // TODO: Get the initial list of destinations.
    }

    destinationAddFormChange (value) {
      this.setState(Object.assign({}, this.state, { destinationAddForm: value }))
    }

    destinationAddFormSubmit (event) {
      event.preventDefault()

      this.setState(Object.assign({}, this.state, {
        destinations: this.state.destinations.concat(this.state.destinationAddForm.destinationName),
        destinationAddForm: { destinationName: '' }
      }))

      return false
    }

    render () {
      return (
        <div>
          <h2 className='crew-name'>{this.props.params.crewName}</h2>
          <div className='lunch-crew-room'>
            <div className='lunch-crew-room__destination-list-wrapper'>
              <DestinationList destinations={this.state.destinations}/>
              <DestinationAddForm onChange={this.destinationAddFormChange} onSubmit={this.destinationAddFormSubmit} value={this.state.destinationAddForm}/>
            </div>
          </div>
        </div>
      )
    }

    updateDestinations (newDestinations) {
      this.setState(Object.assign({}, this.state, {
        destinations: this.state.destinations.concat(newDestinations)
      }))
    }
  }

  LunchCrewRoomPage.propTypes = {
    params: PropTypes.object
  }

  return LunchCrewRoomPage
}
