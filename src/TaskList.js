import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
  state = {
    tasks: [
      {
        description: "Code",
        time: new Date().toString(),
        isComplete: false
      },
      {
        description: "Eat",
        time: new Date().toString(),
        isComplete: false
      },
      {
        description: "Sleep",
        time: new Date().toString(),
        isComplete: false
      }
    ]
  };

  /**
   * Simple map implementation
   */
  // renderItem = () => {
  //   const items = [];

  //   for (let i = 0; i < this.state.tasks.length; i++) {
  //     items.push(<p>{this.state.tasks[i].description}</p>);
  //   }

  //   return items;
  // };

  onSubmitTask = event => {
    event.preventDefault();

    const task = {
      description: event.target[0].value,
      time: event.target[1].value,
      isComplete: false
    };

    // const taskList = [...this.state.tasks, task];
    const taskList = [task].concat(this.state.tasks);

    this.setState({ tasks: taskList });
  };

  onComplete = index => {
    console.log(index);
    const newTasks = [].concat(this.state.tasks);
    newTasks[index].isComplete = true;

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <p>This is our list</p>
        {/* form */}
        <form onSubmit={this.onSubmitTask}>
          <div>
            <input type="text" name="description" />
          </div>
          <div>
            <input type="text" name="time" />
          </div>
          <button type="submit">add</button>
        </form>
        {/* end form */}
        {/* task list */}
        {this.state.tasks.map((task, index) => (
          <Task
            index={index}
            description={task.description}
            time={task.time}
            complete={task.isComplete}
            onComplete={this.onComplete}
          />
        ))}
        {/* end task list */}
      </div>
    );
  }
}

export default TaskList;
