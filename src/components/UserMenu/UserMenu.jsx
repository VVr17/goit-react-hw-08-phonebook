import { Button } from 'components/Button/Button';
import { UserMenuStyled } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserMenuStyled>
      <p>mango@mail.com</p>
      <Button name="darkMode">Logout</Button>
    </UserMenuStyled>
  );
};
