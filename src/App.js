import './App.css';

import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import React from 'react';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          {/* <Route exact path='/topics' component={TopicsList}/>
          <Route path='/topics/:topicId' component={TopicDetail}/> */}
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
