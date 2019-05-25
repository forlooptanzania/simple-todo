import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to ALC with Forloop</h1>

      <Link to="/taskList">
        <a>Task Lisk</a>
      </Link>
    </div>
  );
}

export default WelcomePage;
