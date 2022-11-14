import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { contactsSelectors, selectFilteredContacts } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { Text } from './Contacts.styled';
import { LinkStyled } from 'components/Navigation/NavLink/NavLink.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const Contacts = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Contacts">
      {contacts?.length > 0 && <Filter />}
      <Loader isLoading={isLoading} />
      {filteredContacts.length > 0 ? (
        <ContactList />
      ) : (
        <Text>There are no contacts</Text>
      )}
      <LinkStyled to="/newContact">Create new contact</LinkStyled>
    </Section>
  );
};
