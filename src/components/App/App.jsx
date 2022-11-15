import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Layout } from 'components/Layout/Layout';
import { Register } from 'pages/Register/Register';
import { NewContact } from 'pages/NewContact/NewContact';
import { Home } from 'pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { ContactDetails } from 'pages/ContactDetails/ContactDetails';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
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
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />

          <Route
            path="/contacts/:contactId"
            element={
              <PrivateRoute component={ContactDetails} redirectTo="/login" />
            }
          >
            <Route
              path="updateContact"
              element={
                <PrivateRoute
                  component={UpdateContactForm}
                  redirectTo="/login"
                />
              }
            />
          </Route>

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
  );
};
