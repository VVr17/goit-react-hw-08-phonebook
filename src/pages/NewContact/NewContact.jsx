import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from 'components/Section/Section';
import React from 'react';

export const NewContact = () => {
  return (
    <>
      <Section title="Create new contact">
        <NewContactForm />
      </Section>
    </>
  );
};
