/**
 * @param { object } contacts
 * @param { string } filter
 * @returns { object } filtered contacts
 */
export const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
