import React, { useState } from 'react';
import Task from '../components/Task';
import InputForm from '../components/InputForm';

function TaskListPage() {
  const [tasks, setTasks] = useState([
    { description: 'Code', time: new Date().toString(), isComplete: false },
    { description: 'Eat', time: new Date().toString(), isComplete: false },
    { description: 'Sleep', time: new Date().toString(), isComplete: false }
  ]);

  const submitTask = event => {
    const task = {
      id: tasks.length + 1,
      description: event.target[0].value,
      time: event.target[1].value,
      isComplete: false
    };

    const taskList = [task].concat(tasks);

    setTasks(taskList);
  };

  const onComplete = index => {
    const newTasks = [].concat(tasks);
    newTasks[index].isComplete = true;

    setTasks(newTasks);
  };

  return (
    <div className="main">
      <p>This is our list</p>

      <InputForm addTask={submitTask} />

      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          description={task.description}
          time={task.time}
          complete={task.isComplete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default TaskListPage;
