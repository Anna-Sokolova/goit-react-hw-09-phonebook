import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import operationsContact from '../../redux/contacts/contacts-operations';
import selectorsContacts from '../../redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static defaultProps = {
    name: '',
    number: '',
    state: [],
  };

  static propTypes = {
    contacts: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      alert('Please enter valid information!');
      this.reset();
      return;
    }
    // console.log(this.props.contacts.items);

    const findName = this.props.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase(),
    );

    if (findName) {
      alert(`${this.state.name} is already in contacts!`);
      this.reset();
      return;
    }
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  
  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              name="name"
              pattern="[A-Za-zА-Яа-яЁё\s]{2,}"
              placeholder="Enter name"
              title="Введите Имя и/или Имя и Фамилию"
              autoComplete="off"
              value={name}
              onChange={this.handleInputChange}
              required
            />
          </label>

          <label className={styles.formLabel}>
            Number
            <input
              className={styles.formInput}
              type="tel"
              name="number"
              pattern="[0-9\s]{10,}"
              placeholder="Enter phone"
              title="Введите номер телефона в формате 067 888 88 88"
              autoComplete="off"
              value={number}
              onChange={this.handleInputChange}
              required
            />
          </label>

          <button type="submit" className={styles.btnSubmit}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectorsContacts.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(operationsContact.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
