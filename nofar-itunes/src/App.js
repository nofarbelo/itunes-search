import React from 'react';
import Main from './components/Main';
import Media from './components/Media'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/itunes" component={Media}/>
      </Switch>
    </Router>
  );
}

export default App;
