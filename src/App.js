import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TaskList from "./TaskList";
import WelcomePage from "./WelcomePage";

/**
 * 1. List of tasks
 * 2. Input field
 * 3. Task item
 * 4. Checkbox for marking completion of a task
 * 5. Strike through a task when we are done with it
 * 6. Routing here
 */
function App() {
  return (
    <BrowserRouter>
      {/* here is where you put your navigation bar/menu */}
      <h1>Nav bar</h1>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/taskList" component={TaskList} />
        <Route component={WelcomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
