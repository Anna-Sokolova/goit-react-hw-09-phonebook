import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operationsContact from '../../redux/contacts/contacts-operations';
import selectorsContact from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';

export default function ContactList() {
  //useSelectors as mapStateToProps
  const contacts = useSelector(state =>
    selectorsContact.getFilteredByName(state),
  );

  //useDispatch as mapDispatchToProps
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(operationsContact.deleteContact(id));

  return (
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
}
