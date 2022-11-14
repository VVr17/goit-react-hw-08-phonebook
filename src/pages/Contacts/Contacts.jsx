import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { selectFilter } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { getFilteredContacts } from 'helpers/getFilteredContacts';
import { Text } from './Contacts.styled';
import { LinkStyled } from 'components/Navigation/NavLink/NavLink.styled';

export const Contacts = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const filteredContacts = getFilteredContacts(contacts || [], filter);

  return (
    <Section title="Contacts">
      {contacts?.length > 0 && <Filter />}
      <Loader isLoading={isLoading} />
      {filteredContacts.length > 0 ? (
        <ContactList />
      ) : (
        <Text>There are no contacts</Text>
      )}
      {error && <p>{error}</p>}
      <LinkStyled to="/newContact">Create new contact</LinkStyled>
    </Section>
  );
};
