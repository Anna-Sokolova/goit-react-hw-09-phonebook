import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* Создать нового пользователя
 * POST @ /users/signup
 * body { name, email, password }
 * credentials - это сам стейт ({ name, email, password }), который мы передаем с формы
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => dispatch => {
  dispatch(authActions.registerAuthRequest());

  axios
    .post('/users/signup', credentials)
    .then(response => {
      // console.log(response);
      token.set(response.data.token);
      dispatch(authActions.registerAuthSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerAuthError(error.message)));
};

/* Залогинить пользователя
 * POST @ /users/login
 * body:
 *    { email, password }
 * credentials - это сам стейт ({ email, password }), который мы передаем с формы
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = credentials => dispatch => {
  dispatch(authActions.loginAuthRequest());

  axios
    .post('/users/login', credentials)
    .then(response => {
      // console.log(response);
      token.set(response.data.token);
      dispatch(authActions.loginAuthSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginAuthError(error.message)));
};

/* Разлогинить пользователя
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 * 1. После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = () => dispatch => {
  dispatch(authActions.logoutAuthRequest());

  axios
    .post('/users/logout')
    .then(() => {
      // console.log(response);
      token.unset();
      dispatch(authActions.logoutAuthSuccess());
    })
    .catch(error => dispatch(authActions.logoutAuthError(error.message)));
};

/* Получить инфу о текущем пользователе
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 * 1. Храним токен юзера в LocalStorage и через getState вытягиваем его
 * 2. Забираем токен из стейта через getState()
 * 3. Если токена нет, выходим не выполняя никаких операций
 * 4. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const getCurrentUser = () => async (dispatch, getState) => {
  // console.log(getState().auth.token);
  const persistedToken = getState().auth.token;
  // console.log(persistedToken);

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(response =>
      dispatch(authActions.getCurrentUserSuccess(response.data)),
    )
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export default { register, logOut, logIn, getCurrentUser };
