import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import operationsContact from '../../redux/contacts/contacts-operations';
import selectorsContact from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts &&
      contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}
            <span className={styles.divider}>:</span>
          </p>
          <p>
            <span className={styles.tel}>{number}</span>
          </p>
          <button
            type="button"
            className={styles.btnDelete}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectorsContact.getFilteredByName(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operationsContact.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
