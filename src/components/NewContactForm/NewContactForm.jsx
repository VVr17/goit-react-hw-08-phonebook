import { toast } from 'react-toastify'; // Notifications
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'; // Forms
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { addContact } from 'redux/operations';
import { Button } from 'components/Button/Button';
import { selectContacts } from 'redux/selectors';
import { Input } from './Input/Input';

const INITIAL_STATE = {
  name: '',
  phone: '',
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
  phone: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const NewContactForm = () => {
  const contacts = useSelector(selectContacts);
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
    const { name } = data;

    if (isInPhoneBook(name)) {
      toast.warn(`${name?.toUpperCase()} is already in CONTACTS`);
      reset();
      return;
    }
    dispatch(addContact(data));
    toast.success(`${name?.toUpperCase()} successfully added to CONTACTS`);
    reset();
  };

  function isInPhoneBook(name) {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  }

  return (
    /* "handleSubmit" will validate inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        placeholder="Name"
        register={register}
        error={errors.name}
      />
      <Input
        name="phone"
        placeholder="Phone number"
        register={register}
        error={errors.phone}
      />
      <Button type="submit" name="primary">
        Add Contact
      </Button>
    </form>
  );
};
