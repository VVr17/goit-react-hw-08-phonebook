import { Section } from 'components/Section/Section';
import React from 'react';
import { ReactComponent as IconPhoneBook } from '../../icons/telephone.svg';
import { Title } from './Home.styled';

export const Home = () => {
  return (
    <Section>
      <Title>"Welcome to Phone book"</Title>
      <IconPhoneBook width="60px" height="60px" />
    </Section>
  );
};
