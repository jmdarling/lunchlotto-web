/* globals React ReactDOM $ */
'use strict'

let LunchCrewCreateForm = React.createClass({
  getInitialState: function () {
    return {
      lunchCrewName: ''
    }
  },
  render: function () {
    return <form action='' onSubmit={this.submit}>
      <p>{this.state.lunchCrewName}</p>
      <label htmlFor='lunch-crew-name'>Lunch Crew Name</label>
      <input type='text' id='lunch-crew-name' name='lunchCrewName' ref='lunchCrewName' value={this.state.lunchCrewName} onChange={this.updateLunchCrewName} />
      <button type='submit'>Submit</button>
    </form>
  },
  updateLunchCrewName: function (event) {
    this.setState({
      lunchCrewName: event.target.value
    })
  },
  submit: function (event) {
    event.preventDefault()

    $.ajax({
      url: 'http://localhost:8080/lunchCrew',
      type: 'POST',
      data: JSON.stringify({ name: this.state.lunchCrewName }),
      contentType: 'application/json',
      dataType: 'json'
    })

    return false
  }
})

ReactDOM.render(
  <LunchCrewCreateForm />,
  document.getElementById('container')
)
