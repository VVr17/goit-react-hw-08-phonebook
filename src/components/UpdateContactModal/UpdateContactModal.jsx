import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { Container } from './UpdateContactModal.styled';
import { updateContact } from 'redux/contacts/contactsOperations';

export const UpdateContactModal = ({ contactToUpdate, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onUpdateContact() {
    dispatch(updateContact(contactToUpdate));
    closeModal();
    navigate('/contacts');
  }

  return (
    <Container>
      <p>User {contactToUpdate.name.toUpperCase()} is already in Contacts.</p>
      <p>Do you want to update contact?</p>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridGap="16px"
      >
        <Button onClick={onUpdateContact} name="primary">
          Update
        </Button>
        <Button name="primary" onClick={closeModal}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
};
