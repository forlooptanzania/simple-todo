import React from 'react';

import './style.css';

function InputForm(props) {
  const onSubmitTask = event => {
    event.preventDefault();
    props.addTask(event);
  };

  return (
    <form className="inputform" onSubmit={onSubmitTask}>
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

export default InputForm;
