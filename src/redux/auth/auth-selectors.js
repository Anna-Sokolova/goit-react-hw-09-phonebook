const getAuthorized = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getLoading = state => state.auth.loading;

export default { getAuthorized, getUserName, getLoading };
