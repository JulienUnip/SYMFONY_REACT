import React from 'react';
import './styles/App.scss';
import { Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Header from './components/Header';
import Movie from './components/Movie.js';
import MovieForm from './components/MovieForm.js';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Route render={({location}) => (
          <TransitionGroup>
              <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
              >
                <Switch>
                    <Route path="/" exact component={Movie} />
                    <Route path="/add-movie" exact component={MovieForm} />
                </Switch>
              </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>
    );
  }
  
}

export default App;
