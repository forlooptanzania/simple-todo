import React, { Component } from 'react';
import './style.css';

export class InputForm extends Component {
  onSubmitTask = event => {
    event.preventDefault();
    this.props.addTask(event);
  };

  render() {
    return (
      <form className="inputform" onSubmit={this.onSubmitTask}>
        <div>
          <input type="text" name="description" placeholder="Buys some milk.." />
        </div>
        <div>
          <input type="text" name="time" placeholder="Time.." />
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default InputForm;
