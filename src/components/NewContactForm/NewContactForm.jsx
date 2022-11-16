import { toast } from 'react-toastify'; // Notifications
import { useState } from 'react';
import { useForm } from 'react-hook-form'; // Forms
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { addContact } from 'redux/contacts/contactsOperations';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { contactsSelectors } from 'redux/contacts/contactsSelectors';
import { Form } from './NewContactForm.styled';
import { Input } from '../Input/Input';
import { INPUT_TYPES } from 'constants/constants';
import { LinkStyled } from 'components/Navigation/NavLink/NavLink.styled';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { UpdateContactModal } from 'components/UpdateContactModal/UpdateContactModal';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectLoading);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [duplicatedContact, setDuplicatedContact] = useState(null);
  const toggleModal = () => setModalIsOpen(prevModalState => !prevModalState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...INITIAL_STATE },
    resolver: yupResolver(validationSchema),
  });

  const isInPhoneBook = (name, contacts = []) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  const onSubmit = data => {
    const { name } = data;
    const contactIsInPhoneBook = isInPhoneBook(name, contacts);

    if (contacts && contactIsInPhoneBook) {
      toast.warn(`${name?.toUpperCase()} is already in CONTACTS`);
      const { id } = contactIsInPhoneBook;

      setDuplicatedContact({ ...data, id });
      toggleModal();
      return;
    }

    dispatch(addContact(data));
    navigate('/contacts');
    reset();
  };

  return (
    <>
      {/* "handleSubmit" will validate inputs before invoking "onSubmit"  */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Name"
          register={register}
          error={errors.name}
        />
        <Input
          type={INPUT_TYPES.tel}
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
          <Button type="submit" name="primary" disabled={modalIsOpen}>
            Add Contact
          </Button>
          <LinkStyled to="/contacts">To Contacts</LinkStyled>
        </Box>
      </Form>
      {modalIsOpen && (
        <Modal closeModal={toggleModal}>
          <UpdateContactModal
            contactToUpdate={duplicatedContact}
            closeModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};
