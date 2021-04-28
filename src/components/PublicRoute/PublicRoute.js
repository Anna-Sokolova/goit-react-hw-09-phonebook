import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import routes from '../../routes';
/**
 * - Если маршрут ограниченный (restricted это буль), и пользователь залогинен (isAuthenticated), рендерит редирект на /todos
 * - В противном случае рендерит компонент ребенка в PublicRoute
 */
export default function PublicRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(state =>
    authSelectors.getAuthorized(state),
  );
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={routes.contacts} />
      ) : (
        children
      )}
    </Route>
  );
}
