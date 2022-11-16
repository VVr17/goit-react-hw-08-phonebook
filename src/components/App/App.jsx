import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { Contacts } from 'pages/Contacts/Contacts';
import { getCurrentUser } from 'redux/auth/authOperations';
import { Home } from 'pages/Home/Home';
import { Loader } from 'components/Loader/Loader';
import { Login } from 'pages/Login/Login';
import { Layout } from 'components/Layout/Layout';
import { NewContact } from 'pages/NewContact/NewContact';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { Register } from 'pages/Register/Register';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshingUser ? (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={Register}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute component={Login} redirectTo="/contacts" />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
              s
              <Route
                path="/newContact"
                element={
                  <PrivateRoute component={NewContact} redirectTo="/login" />
                }
              />
            </Route>
          </Routes>
          <ToastContainer
            autoClose={3000}
            theme="colored"
            position="bottom-right"
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
