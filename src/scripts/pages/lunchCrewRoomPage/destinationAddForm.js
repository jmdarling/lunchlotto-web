'use strict'

import React, {PropTypes} from 'react'

function DestinationAddForm ({onChange, onSubmit, value}) {
  return (
    <form className='form' action='' onSubmit={onSubmit}>
      <div className='form__form-wrapper'>
        <input className='form__form-wrapper__input' type='text' id='destination-name' name='destinationName' value={value.destinationName} onChange={event => onChange(Object.assign({}, value, { destinationName: event.target.value }))} />
        <button className='form__form-wrapper__submit' type='submit'>&rsaquo;</button>
      </div>
    </form>
  )
}

DestinationAddForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.object,
  onChange: PropTypes.func
}

export default DestinationAddForm
