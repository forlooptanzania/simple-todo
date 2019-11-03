import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import WelcomePage from './pages/WelcomePage';

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <h1 className="nav-title">Simple Todo</h1>
        </nav>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/tasks" component={TaskListPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
