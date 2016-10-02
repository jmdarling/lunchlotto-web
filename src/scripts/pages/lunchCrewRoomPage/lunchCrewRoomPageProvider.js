'use strict'

import React, {Component, PropTypes} from 'react'

import DestinationList from './destinationList'
import DestinationAddForm from './destinationAddForm'

export default (configuration, debug, browserHistory, ioClient) => {
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
      this.selectDestination = this.selectDestination.bind(this)
      this.updateDestinations = this.updateDestinations.bind(this)
      this.updateWinningOption = this.updateWinningOption.bind(this)

      ioClient.emit('join room', props.params.crewName)

      ioClient.on('destination options', this.updateDestinations)
      ioClient.on('winning option', this.updateWinningOption)
    }

    destinationAddFormChange (value) {
      this.setState(Object.assign({}, this.state, { destinationAddForm: value }))
    }

    destinationAddFormSubmit (event) {
      event.preventDefault()

      this.setState(Object.assign({}, this.state, { destinationAddForm: { destinationName: '' } }))

      const destination = {
        lunchCrewName: this.props.params.crewName,
        destination: this.state.destinationAddForm.destinationName
      }

      debug(`Submitting new destination: ${JSON.stringify(destination)}`)

      ioClient.emit('add destination', destination)

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

            <div className='lunch-crew-room__destination-selection'>
              <p className='lunch-crew-room__destination-selection__selected-destination'>{this.state.selectedDestination === '' ? 'No Destination Selected' : this.state.selectedDestination}</p>
              <button className='lunch-crew-room__destination-selection__select-destination' onClick={this.selectDestination}>Play the Lotto!</button>
            </div>
          </div>
        </div>
      )
    }

    selectDestination () {
      ioClient.emit('pull lever', this.props.params.crewName)
    }

    updateDestinations (newDestinations) {
      debug(`Received new destinations: ${newDestinations}`)

      this.setState(Object.assign({}, this.state, {
        destinations: this.state.destinations.concat(newDestinations)
      }))
    }

    updateWinningOption (winningOption) {
      debug(`Received new winning option: ${winningOption}`)

      this.setState(Object.assign({}, this.state, {
        selectedDestination: winningOption
      }))
    }
  }

  LunchCrewRoomPage.propTypes = {
    params: PropTypes.object
  }

  return LunchCrewRoomPage
}
