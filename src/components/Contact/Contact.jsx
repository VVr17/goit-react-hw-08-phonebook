import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { ContactStyled } from './Contact.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const Contact = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  function onDelete(id, name) {
    deleteContact(id);
    toast.info(`${name.toUpperCase()} deleted from CONTACTS`);
  }

  return (
    <ContactStyled>
      <Box display={['block', 'block', 'flex', 'flex']}>
        <p>{name}:</p>
        <p>{phone}</p>
      </Box>
      <Button onClick={() => onDelete(id, name)}>
        {isDeleting ? `Deleting...` : `Delete`}
      </Button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
