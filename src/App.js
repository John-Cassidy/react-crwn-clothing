import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import React from 'react';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        {/* <Route exact path='/topics' component={TopicsList}/>
        <Route path='/topics/:topicId' component={TopicDetail}/> */}
      </Switch>
    </div>
  );
}

export default App;
