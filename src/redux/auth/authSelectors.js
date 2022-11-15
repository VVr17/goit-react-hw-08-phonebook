const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserEmail = state => state.auth.user.email;
const selectUserName = state => state.auth.user.name;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserEmail,
  selectUserName,
};
