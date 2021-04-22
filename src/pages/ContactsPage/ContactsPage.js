import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import operationContacts from '../../redux/contacts/contacts-operations';
import selectorsContacts from '../../redux/contacts/contacts-selectors';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }

  render() {
    return (
      <>
        <Title title="Phonebook" />
        <ContactForm />
        {this.props.contacts.length > 0 && <Title title="Contacts" />}
        {this.props.contacts.length > 1 && <Filter />}
        <ContactList />
        {this.props.isloadingContacts && <Spinner />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectorsContacts.getAllContacts(state),
  isloadingContacts: selectorsContacts.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllContacts: () => dispatch(operationContacts.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
