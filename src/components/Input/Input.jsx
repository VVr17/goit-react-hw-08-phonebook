import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaUserEdit, FaPencilAlt } from 'react-icons/fa';
import { MdEmail, MdLock, MdOutlinePhoneAndroid } from 'react-icons/md';
import { Eye } from 'components/Eye/Eye';
import { LabelStyled, ErrorText, InputStyled, InputIcon } from './Input.styled';
import { INPUT_TYPES } from 'constants/constants';

export const Input = ({
  type = INPUT_TYPES.text,
  name,
  placeholder,
  register,
  error,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleInputType = event => {
    inputType === INPUT_TYPES.password
      ? setInputType(INPUT_TYPES.text)
      : setInputType(INPUT_TYPES.password);
  };

  return (
    <LabelStyled>
      {name}
      <InputIcon> {getIcon(type)}</InputIcon>
      <InputStyled
        type={inputType}
        placeholder={placeholder}
        {...register(name, { required: true })}
        aria-invalid={error ? 'true' : 'false'}
        border={error ? 'red' : 'inputText'}
        backgroundColor={error ? 'bgErrorColor' : ''}
      />
      {error && <ErrorText>{error?.message}</ErrorText>}
      {type === INPUT_TYPES.password && (
        <Eye
          onClick={toggleInputType}
          isVisible={inputType !== INPUT_TYPES.password}
        />
      )}
    </LabelStyled>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.object,
  register: PropTypes.func,
};

function getIcon(type) {
  switch (type) {
    case INPUT_TYPES.text:
      return <FaUserEdit />;
    case INPUT_TYPES.password:
      return <MdLock />;
    case INPUT_TYPES.email:
      return <MdEmail />;
    case INPUT_TYPES.tel:
      return <MdOutlinePhoneAndroid />;
    default:
      return <FaPencilAlt />;
  }
}
