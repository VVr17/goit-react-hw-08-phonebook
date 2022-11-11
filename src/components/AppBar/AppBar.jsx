import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
    </Header>
  );
};
