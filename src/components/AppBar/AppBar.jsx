import { Container, Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
};
