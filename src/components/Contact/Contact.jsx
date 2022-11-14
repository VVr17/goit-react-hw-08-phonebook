import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { ContactStyled } from './Contact.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactStyled>
      <Box display={['block', 'block', 'flex', 'flex']}>
        <p>{name}:</p>
        <p>{number}</p>
      </Box>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
