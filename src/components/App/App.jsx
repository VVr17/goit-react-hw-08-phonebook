import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Box } from 'components/Box/Box';
import { ContactList } from 'components/ContactList/ContactList';
import { selectFilter } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from 'components/Section/Section';
import { Text, Title } from './App.styled';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { getFilteredContacts } from 'helpers/getFilteredContacts';

export const App = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const filteredContacts = getFilteredContacts(contacts || [], filter);

  return (
    <Box as="main" bg="mainBackgroundColor">
      <Title>PhoneBook</Title>
      <Section title="Create new contact">
        <NewContactForm />
      </Section>
      <Section title="Contacts">
        {contacts?.length > 0 && <Filter />}
        <Loader isLoading={isLoading} />
        {filteredContacts.length > 0 ? (
          <ContactList />
        ) : (
          <Text>There are no contacts</Text>
        )}
        {error && <p>{error}</p>}
      </Section>
      <ToastContainer autoClose={3000} theme="colored" />
    </Box>
  );
};
