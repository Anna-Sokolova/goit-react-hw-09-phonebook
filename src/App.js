import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

export default function App() {
  const dispatch = useDispatch();

  //useEffect as ComponentDidMount, вызывается 1 раз при первом рендере
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Container>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />

            {/* теперь в этих раутах нет пропов Route - history, location, params, match
                чтоб получить к ним доступ нужно использовать хуки раутеров */}
            <PublicRoute path={routes.login} restricted>
              <LoginPage />
            </PublicRoute>

            <PublicRoute path={routes.register} restricted>
              <RegisterPage />
            </PublicRoute>

            <PrivateRoute path={routes.contacts}>
              <ContactsPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
