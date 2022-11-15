import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';
import { authSelectors } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const isRefreshingUser = useSelector(authSelectors.selectIsRefreshing);

  return (
    <>
      {!isRefreshingUser ? (
        <>
          <AppBar />
          <Box as="main" bg="mainBackgroundColor">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Box>
        </>
      ) : (
        <Loader isLoading={isRefreshingUser} />
      )}
    </>
  );
};
