import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PhotoBar from './components/PhotoBar';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/categories/:categoryId' component={PhotoBar}/>
        </Switch>
    </div>
  );
}

export default App;
