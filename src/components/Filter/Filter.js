import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionsContact from '../../redux/contacts/contacts-actions';
import selectorsContacts from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

export default function Filter() {
  //useSelector as mapStateToProps
  const valueFilter = useSelector(state =>
    selectorsContacts.getValueFilter(state),
  );

  //useDispatch as mapDispatchToProps
  const dispatch = useDispatch();
  //используем useCallback для мемоизации функции
  const onChangeFilter = useCallback(
    e => dispatch(actionsContact.changeFilter(e.currentTarget.value)),
    [dispatch],
  );

  return (
    <div className={styles.wrap}>
      <label className={styles.labelFilter}>
        Find contacts
        <input
          className={styles.inputFilter}
          type="text"
          value={valueFilter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}
