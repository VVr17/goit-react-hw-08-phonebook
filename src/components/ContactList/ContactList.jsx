import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { Contacts } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Contacts>
      {filteredContacts.map(({ name, phone, id }) => (
        <li key={id}>
          <Contact name={name} phone={phone} id={id} />
        </li>
      ))}
    </Contacts>
  );
};
