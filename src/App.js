import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import React from 'react';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route exact path='/topics' component={TopicsList}/>
        <Route path='/topics/:topicId' component={TopicDetail}/> */}
      </Switch>
    </div>
  );
}

export default App;
