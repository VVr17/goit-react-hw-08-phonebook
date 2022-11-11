import { useForm } from 'react-hook-form'; // Forms
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { Input } from 'components/Input/Input';
// import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...INITIAL_STATE },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        placeholder="E-mail"
        register={register}
        error={errors.email}
      />
      <Input
        name="password"
        placeholder="Password"
        register={register}
        error={errors.password}
      />
      {/* <Loader isLoading={isCreating} /> */}
      <Button type="submit" name="primary">
        Login
      </Button>
    </form>
  );
};
