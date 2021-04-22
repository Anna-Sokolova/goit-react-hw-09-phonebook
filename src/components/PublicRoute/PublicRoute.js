import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import routes from '../../routes';
/**
 * - Если маршрут ограниченный (restricted это буль), и пользователь залогинен (isAuthenticated), рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={routes.contacts} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
