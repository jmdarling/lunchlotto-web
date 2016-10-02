'use strict'

import React, {PropTypes} from 'react'

function LunchCrewJoinForm ({onChange, onSubmit, value}) {
  return (
    <div id='lunch-crew-join-form'>
      <form className='form' action='' onSubmit={onSubmit}>
        <p className='form__instructions'>Welcome to Lunchlotto. Enter the name of an existing or new lunch crew to get started!</p>

        <div className='form__form-wrapper'>
          <input className='form__form-wrapper__input' type='text' id='lunch-crew-name' name='lunchCrewName' value={value.lunchCrewName} onChange={event => onChange(Object.assign({}, value, { lunchCrewName: event.target.value }))} />
          <button className='form__form-wrapper__submit' type='submit'>&rsaquo;</button>
        </div>
      </form>
    </div>
  )
}

LunchCrewJoinForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.object,
  onChange: PropTypes.func
}

export default LunchCrewJoinForm
