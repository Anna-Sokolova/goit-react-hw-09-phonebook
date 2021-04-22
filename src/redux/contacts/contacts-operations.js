import axios from 'axios';
import contactActions from './contacts-actions';

//получение всех контактов
const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactActions.fetchContactSuccess(data)))
    .catch(error => dispatch(contactActions.fetchContactError(error.message)));
};

//создание нового контакта
const addContact = data => dispatch => {
  const contact = {
    name: data.name,
    number: data.number,
  };

  dispatch(contactActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactActions.addContactSuccess(data)))
    .catch(error => dispatch(contactActions.addContactError(error.message)));
};

//удаление контакта
const deleteContact = contactId => dispatch => {
  dispatch(contactActions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactActions.deleteContactSuccess(contactId)))
    .catch(error => contactActions.deleteContactError(error.message));
};

export default { fetchContacts, addContact, deleteContact };
