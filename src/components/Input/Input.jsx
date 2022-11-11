import PropTypes from 'prop-types';
import { LabelStyled, ErrorText, InputStyled } from './Input.styled';

export const Input = ({
  type = 'text',
  name,
  placeholder,
  register,
  error,
}) => {
  return (
    <LabelStyled>
      {name}
      <InputStyled
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
        aria-invalid={error ? 'true' : 'false'}
        border={error ? 'red' : 'inputText'}
        backgroundColor={error ? 'bgErrorColor' : ''}
      />
      {error && <ErrorText>{error?.message}</ErrorText>}
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
