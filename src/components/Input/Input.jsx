import { Eye } from 'components/Eye/Eye';
import PropTypes from 'prop-types';
import { LabelStyled, ErrorText, InputStyled } from './Input.styled';
import { useState } from 'react';

export const Input = ({
  type = 'text',
  name,
  placeholder,
  register,
  error,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleInputType = event => {
    // event.preventDefault();
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  return (
    <LabelStyled>
      {name}
      <InputStyled
        type={inputType}
        placeholder={placeholder}
        {...register(name, { required: true })}
        aria-invalid={error ? 'true' : 'false'}
        border={error ? 'red' : 'inputText'}
        backgroundColor={error ? 'bgErrorColor' : ''}
      />
      {error && <ErrorText>{error?.message}</ErrorText>}
      {type === 'password' && (
        <Eye onClick={toggleInputType} isVisible={inputType !== 'password'} />
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

//<input type="text" {...register('name'), {
//    required: 'Name is required',
//    minLength: {
//      value: 4,
//      message: 'Name should be at least 4 characters',
//    },
//    maxLength: {
//      value: 20,
//      message: 'Name should be at most 40 characters',
//    },
// }} />
