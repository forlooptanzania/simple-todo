import React from "react";
import "./style.css";

function Task(props) {
  return (
    <div className="task" onClick={() => props.onComplete(props.index)}>
      <p className="task-description">{props.description}</p>
      <p className="task-time">{props.time}</p>
      <p className={props.complete ? "task-status-complete" : "task-status"}>
        {props.complete ? "Complete" : "Not Complete"}
      </p>
    </div>
  );
}

export default Task;
