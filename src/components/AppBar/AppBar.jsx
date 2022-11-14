import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Container, Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
};
