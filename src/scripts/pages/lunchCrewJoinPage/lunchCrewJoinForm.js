'use strict'

import React, {PropTypes} from 'react'

function LunchCrewJoinForm ({onChange, onSubmit, value}) {
  return (
    <form action='' onSubmit={onSubmit}>
      <label htmlFor='lunch-crew-name'>Lunch Crew Name</label>
      <input type='text' id='lunch-crew-name' name='lunchCrewName' value={value.lunchCrewName} onChange={event => onChange(Object.assign({}, value, { lunchCrewName: event.target.value }))} />
      <button className='btn btn--big btn--green' type='submit'>Submit</button>
    </form>
  )
}

LunchCrewJoinForm.PropTypes = {
  onSubmit: PropTypes.func,
  lunchCrewName: PropTypes.string,
  onChange: PropTypes.func
}

export default LunchCrewJoinForm
