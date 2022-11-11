import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box as="main" bg="mainBackgroundColor">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
