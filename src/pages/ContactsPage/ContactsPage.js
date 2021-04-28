import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import operationContacts from '../../redux/contacts/contacts-operations';
import selectorsContacts from '../../redux/contacts/contacts-selectors';

export default function ContactsPage() {
  //dispatchs as mapDispatchToProps
  const dispatch = useDispatch();

  //selectors as mapStateToProps
  const contacts = useSelector(state =>
    selectorsContacts.getAllContacts(state),
  );
  const isloadingContacts = useSelector(state =>
    selectorsContacts.getLoading(state),
  );

  //useEffect as ComponentDidMount
  useEffect(() => {
    dispatch(operationContacts.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title title="Phonebook" />
      <ContactForm />
      {contacts.length > 0 && <Title title="Contacts" />}
      {contacts.length > 1 && <Filter />}
      <ContactList />
      {isloadingContacts && <Spinner />}
    </>
  );
}
