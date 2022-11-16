import PropTypes from 'prop-types';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { IconWrapper } from './Eye.styled';

export const Eye = ({ onClick, isVisible }) => (
  <IconWrapper onClick={onClick}>
    {isVisible ? <FaEye /> : <FaEyeSlash />}
  </IconWrapper>
);

Eye.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
