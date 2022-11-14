import { useForm } from 'react-hook-form'; // Forms
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/authOperations';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(20, 'Name should be at most 20 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  email: yup
    .string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'For example: email@email.com')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Name should be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Password should be at least 8 characters and contain at least one lower case, one upper case, one number'
    )
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...INITIAL_STATE },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    dispatch(userRegister(data));
    reset();
  };

  return (
    <Box as="form" textAlign="center" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        placeholder="Name"
        register={register}
        error={errors.name}
      />
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        register={register}
        error={errors.email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        register={register}
        error={errors.password}
      />
      <Button type="submit" name="primary">
        Submit
      </Button>
    </Box>
  );
};
