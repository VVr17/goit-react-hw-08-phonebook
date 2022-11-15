import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { ContactStyled } from './Contact.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { LinkStyled } from 'components/Navigation/NavLink/NavLink.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactStyled>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gridGap="8px">
        <p>{name}:</p>
        <p>{number}</p>
      </Box>
      <Box display={['flex']} gridGap="16px">
        <LinkStyled to={`${id}/updateContact`} name="lightMode">
          Update
        </LinkStyled>
        <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
      </Box>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
