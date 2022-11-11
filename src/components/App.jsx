import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/App.styled';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const items = useSelector(getContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      {items.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          {error && <p> {error} </p>}
        </>
      )}

      <ContactList />
    </Container>
  );
};
