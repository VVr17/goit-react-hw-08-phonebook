import { Section } from 'components/Section/Section';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const ContactDetails = () => {
  return (
    <Section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
