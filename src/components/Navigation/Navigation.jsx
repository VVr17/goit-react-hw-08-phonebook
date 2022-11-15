import { UserMenu } from 'components/UserMenu/UserMenu';
import { authNavItems, userNavItems } from 'constants/navItems';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { Link, NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigation = isLoggedIn ? userNavItems : authNavItems;

  return (
    <>
      <NavigationStyled>
        <ul>
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </NavigationStyled>
      {isLoggedIn && <UserMenu />}
    </>
  );
};

// const authNavItems = [
//   { href: 'register', label: 'Register' },
//   { href: 'login', label: 'Login' },
// ];

// const userNavItems = [
//   { href: 'Contacts', label: 'Contacts' },
//   { href: 'NewContact', label: 'Add contact' },
// ];

// export const Navigation = () => {
//   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
//   const navigation = isLoggedIn ? userNavItems : authNavItems;
//   console.log('isLoggedIn', isLoggedIn);

//   return (
//     <>
//       <NavigationStyled>
//         <ul>
//           {navigation.map(({ href, label }) => (
//             <li key={href}>
//               <Link to={href}>{label}</Link>
//             </li>
//           ))}
//         </ul>
//       </NavigationStyled>
//       {isLoggedIn && <UserMenu />}
//     </>
//   );
// };
