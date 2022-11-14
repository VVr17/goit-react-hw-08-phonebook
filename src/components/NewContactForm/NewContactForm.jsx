import { toast } from 'react-toastify'; // Notifications
import { useForm } from 'react-hook-form'; // Forms
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { Button } from 'components/Button/Button';
import { Input } from '../Input/Input';
import { Loader } from 'components/Loader/Loader';
import { Form } from './NewContactForm.styled';
import { LinkStyled } from 'components/Navigation/NavLink/NavLink.styled';
import { Box } from 'components/Box/Box';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';

const INITIAL_STATE = {
  name: '',
  number: '',
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
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const NewContactForm = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectLoading);
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

    if (contacts && isInPhoneBook(name, contacts)) {
      toast.warn(`${name?.toUpperCase()} is already in CONTACTS`);
      return;
    }
    dispatch(addContact(data));
    reset();
  };

  function isInPhoneBook(name, contacts = []) {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  }

  return (
    /* "handleSubmit" will validate inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        placeholder="Name"
        register={register}
        error={errors.name}
      />
      <Input
        type="tel"
        name="number"
        placeholder="Phone number"
        register={register}
        error={errors.number}
      />
      <Loader isLoading={isLoading} />
      <Box
        display={['flex']}
        justifyContent={'space-between'}
        maxWidth="280px"
        mx="auto"
      >
        <Button type="submit" name="primary">
          Add Contact
        </Button>
        <LinkStyled to="/contacts">Go Back</LinkStyled>
        {/* <LinkGoBack to={previousPage.current}>Go Back</LinkGoBack> */}
      </Box>
    </Form>
  );
};
