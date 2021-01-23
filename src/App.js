import './App.css';
import React from "react"
import {Route, Switch} from 'react-router-dom'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contacts" />
        <Route path="/search" />
        <Route path="/legacy" />
        <Route path="*" render={() => <span>404</span>}/>
      </Switch>
    </div>
  );
}

export default App;
