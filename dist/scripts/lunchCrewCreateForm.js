/* globals React ReactDOM $ */
'use strict';

var LunchCrewCreateForm = React.createClass({
  displayName: 'LunchCrewCreateForm',

  getInitialState: function getInitialState() {
    return {
      lunchCrewName: ''
    };
  },
  render: function render() {
    return React.createElement(
      'form',
      { action: '', onSubmit: this.submit },
      React.createElement(
        'p',
        null,
        this.state.lunchCrewName
      ),
      React.createElement(
        'label',
        { htmlFor: 'lunch-crew-name' },
        'Lunch Crew Name'
      ),
      React.createElement('input', { type: 'text', id: 'lunch-crew-name', name: 'lunchCrewName', ref: 'lunchCrewName', value: this.state.lunchCrewName, onChange: this.updateLunchCrewName }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Submit'
      )
    );
  },
  updateLunchCrewName: function updateLunchCrewName(event) {
    this.setState({
      lunchCrewName: event.target.value
    });
  },
  submit: function submit(event) {
    event.preventDefault();

    $.ajax({
      url: 'http://localhost:8080/lunchCrew',
      type: 'POST',
      data: JSON.stringify({ name: this.state.lunchCrewName }),
      contentType: 'application/json',
      dataType: 'json'
    });

    return false;
  }
});

ReactDOM.render(React.createElement(LunchCrewCreateForm, null), document.getElementById('container'));