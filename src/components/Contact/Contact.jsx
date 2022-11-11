import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { ContactStyled } from './Contact.styled';
import { deleteContact } from 'redux/operations';

export const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  function onDelete(id, name) {
    dispatch(deleteContact(id));
    toast.info(`${name.toUpperCase()} deleted from CONTACTS`);
  }

  return (
    <ContactStyled>
      <Box display={['block', 'block', 'flex']}>
        <p>{name}:</p>
        <p>{phone}</p>
      </Box>
      <Button onClick={() => onDelete(id, name)}>Delete</Button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
