import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const Link = styled(NavLink)`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-of-type) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
