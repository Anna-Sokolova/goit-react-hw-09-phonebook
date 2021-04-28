import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operationsContact from '../../redux/contacts/contacts-operations';
import selectorsContacts from '../../redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  //useState
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //useSelector as mapStateToProps
  const contacts = useSelector(state =>
    selectorsContacts.getAllContacts(state),
  );

  //useDispatch
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    data => {
      dispatch(operationsContact.addContact(data));
    },
    [dispatch],
  );

  const handleInputChange = useCallback(e => {
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (name.trim() === '' || number.trim() === '') {
        alert('Please enter valid information!');
        reset();
        return;
      }

      const findName = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );

      if (findName) {
        alert(`${name} is already in contacts!`);
        reset();
        return;
      }
      onSubmit({ name, number });
      reset();
    },
    [contacts, name, number, onSubmit],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            pattern="[A-Za-zА-Яа-яЁё\s]{2,}"
            placeholder="Enter name"
            title="Введите данные о контакте, например Анна Соколова"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
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
            title="Введите номер телефона в формате 067 888 88 88 (не менее 10 цифр)"
            autoComplete="off"
            value={number}
            onChange={handleInputChange}
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
