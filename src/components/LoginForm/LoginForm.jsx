import { useForm } from 'react-hook-form'; // Forms
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { Input } from 'components/Input/Input';
// import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/authOperations';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const LoginForm = () => {
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
    dispatch(userLogin(data));
    reset();
  };

  return (
    <Box as="form" textAlign="center" onSubmit={handleSubmit(onSubmit)}>
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
        Login
      </Button>
    </Box>
  );
};
