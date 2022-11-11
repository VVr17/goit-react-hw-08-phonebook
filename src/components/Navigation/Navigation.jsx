// import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { Link, NavigationStyled } from './Navigation.styled';

const navItems = [
  { href: 'login', label: 'Login' },
  { href: 'register', label: 'Register' },
];

// const userNavItems = [
//   { href: 'Contacts', label: 'Contacts' },
//   { href: 'NewContact', label: 'Add contact' },
// ];

export const Navigation = () => {
  return (
    <>
      <NavigationStyled>
        <ul>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
          {/* {userNavItems.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))} */}
        </ul>
      </NavigationStyled>
      {/* add condition if isLogin -> show userMenu and usernavigation */}
      {/* <UserMenu /> */}
    </>
  );
};
