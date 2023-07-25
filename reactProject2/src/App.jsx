import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/income" component={IncomePage} />
          <Route path="/expense" component={ExpensePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
