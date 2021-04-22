import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
//components
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import Container from './components/Container';
//routes
import routes from './routes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

//dinamick pages грузятся асинхронно!!!
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path={routes.home} exact component={HomePage} />
              <PublicRoute
                path={routes.login}
                restricted
                component={LoginPage}
              />
              <PublicRoute
                path={routes.register}
                restricted
                component={RegisterPage}
              />
              <PrivateRoute path={routes.contacts} component={ContactsPage} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
