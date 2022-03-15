import React, { Suspense, lazy, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';
// import ShopPage from './pages/shop/shop.component';
// import HomePage from './pages/homepage/homepage.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />

            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
