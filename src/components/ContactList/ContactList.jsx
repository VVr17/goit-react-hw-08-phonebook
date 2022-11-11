import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { Contacts } from './ContactList.styled';
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { getFilteredContacts } from 'helpers/getFilteredContacts';

export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const filteredContacts = getFilteredContacts(contacts || [], filter);

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
