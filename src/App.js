import React from 'react';
import Topbar from './components/layout/Topbar'
import Quizzes from './components/quizzes/Quizzes'
import EndGame from './components/endgame/EndGame'
import About from './components/community/About'
import Collaborate from './components/community/Collaborate'
import Scoreboard from './scoreboard/Scoreboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './Background.css';

function App() {
  return (
    <Router>
      <div className="app">
        <section className="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
        <Topbar></Topbar>
        <main>
          <Switch>
            <Route exact path="/" component={Quizzes}></Route>
            <Route exact path="/endgame" component={EndGame}></Route>
            <Route exact path="/scoreboard" component={Scoreboard}></Route>
            <Route exact path="/collaborate" component={Collaborate}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
