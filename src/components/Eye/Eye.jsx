import PropTypes from 'prop-types';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { InputIcon } from './Eye.styled';

export const Eye = ({ onClick, isVisible }) => (
  <InputIcon onClick={onClick}>
    {isVisible ? <FaEye /> : <FaEyeSlash />}
  </InputIcon>
);

Eye.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
