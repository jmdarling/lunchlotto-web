'use strict'

import React, {PropTypes} from 'react'

function DestinationList ({destinations}) {
  return (
    <div>
      <h2>Destinations</h2>
      <ul>
        {destinations.map(destination => <li key={destination}>{destination}</li>)}
      </ul>
    </div>
  )
}

DestinationList.propTypes = {
  destination: PropTypes.array
}

export default DestinationList
