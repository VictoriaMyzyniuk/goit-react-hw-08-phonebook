import {
  ContactListEl,
  ContactListItem,
  ContactItemHeader,
  ContactItemText,
  ContactItemButton,
} from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
// import { getContactsData, deleteContact } from 'redux/contactsSlice';

import { deleteContact } from 'redux/operations';
import { getContacts, getStatusFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const getNeeddedCard = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCard = contactId => {
    dispatch(deleteContact(contactId));
  };

  const neededCards = getNeeddedCard();

  return (
    <ContactListEl>
      {neededCards.map(({ name, number, id }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemHeader>{name}</ContactItemHeader>
            <ContactItemText>{number}</ContactItemText>
            <ContactItemButton
              type="button"
              onClick={() => {
                deleteCard(id);
              }}
            >
              Delete
            </ContactItemButton>
          </ContactListItem>
        );
      })}
    </ContactListEl>
  );
};
