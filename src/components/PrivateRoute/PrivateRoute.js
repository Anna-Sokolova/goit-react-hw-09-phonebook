import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import routes from '../../routes';
/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент ребенка PrivateRoute
 * - В противном случае рендерит Redirect на /login
 */
export default function PrivateRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(state =>
    authSelectors.getAuthorized(state),
  );
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={routes.login} />}
    </Route>
  );
}
