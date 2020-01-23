import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="jumbo">
      <h1 className="title">Welcome to ALC with Forloop</h1>

      <p>
        According to wikipedia As its name implies, the To-do list on an article's talk page shows the list of
        improvements suggested for the article. It is created and formatted using the Todo template. The list is
        maintained by editors, writers, reviewers or readers like you as a way to focus your collaborative efforts. As
        such, they represent a tentative consensus that helps improve the efficiency of the editing process.
      </p>
      <Link to="/tasks">Task Lisk</Link>
    </div>
  );
}

export default WelcomePage;
