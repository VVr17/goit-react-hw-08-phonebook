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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="newContact" element={<NewContact />} />
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
