'use strict'

import React, {PropTypes} from 'react'

function DestinationAddForm ({onChange, onSubmit, value}) {
  return (
    <form action='' onSubmit={onSubmit}>
      <label htmlFor='destination-name'>Destination Name</label>
      <input type='text' id='destination-name' name='destinationName' value={value.destinationName} onChange={event => onChange(Object.assign({}, value, { destinationName: event.target.value }))} />
      <button type='submit'>Submit</button>
    </form>
  )
}

DestinationAddForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.object,
  onChange: PropTypes.func
}

export default DestinationAddForm
