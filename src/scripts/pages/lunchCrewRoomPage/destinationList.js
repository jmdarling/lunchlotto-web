'use strict'

import React, {PropTypes} from 'react'

function DestinationList ({destinations}) {
  return (
    <div className='destination-list'>
      <h2 className='destination-list__header'>Destinations</h2>
      <ul className='destination-list__list'>
        {destinations.length === 0 ? <li>Add some destinations...</li> : null}
        {destinations.map(destination => <li key={destination}>{destination}</li>)}
      </ul>
    </div>
  )
}

DestinationList.propTypes = {
  destination: PropTypes.array
}

export default DestinationList
