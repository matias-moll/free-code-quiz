import React from 'react';
import Topbar from './components/layout/Topbar'
import Quizzes from './components/quizzes/Quizzes'
import EndGame from './components/quizzes/EndGame'
import Scoreboard from './components/quizzes/Scoreboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Topbar></Topbar>
          <h1>Free Code Quiz</h1>
          <Switch>
            <Route exact path="/" component={Quizzes}></Route>
            <Route exact path="/endgame" component={EndGame}></Route>
            <Route exact path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
