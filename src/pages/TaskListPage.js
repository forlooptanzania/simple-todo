import React, { Component } from 'react';
import Task from '../components/Task';
import InputForm from '../components/InputForm';

class TaskListPage extends Component {
  state = {
    tasks: [
      { description: 'Code', time: new Date().toString(), isComplete: false },
      { description: 'Eat', time: new Date().toString(), isComplete: false },
      { description: 'Sleep', time: new Date().toString(), isComplete: false }
    ]
  };
  submitTask = event => {
    const task = {
      id: this.state.tasks.length + 1,
      description: event.target[0].value,
      time: event.target[1].value,
      isComplete: false
    };

    const taskList = [task].concat(this.state.tasks);

    this.setState({ tasks: taskList });
  };

  onComplete = index => {
    const newTasks = [].concat(this.state.tasks);
    newTasks[index].isComplete = true;

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="main">
        <p>This is our list</p>

        <InputForm addTask={this.submitTask} />

        {this.state.tasks.map((task, index) => (
          <Task
            index={index}
            description={task.description}
            time={task.time}
            complete={task.isComplete}
            onComplete={this.onComplete}
          />
        ))}
      </div>
    );
  }
}

export default TaskListPage;
