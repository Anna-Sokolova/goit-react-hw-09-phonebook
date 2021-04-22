import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionsContact from '../../redux/contacts/contacts-actions';
import selectorsContacts from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = ({ valueFilter, onChangeFilter }) => (
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

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  valueFilter: selectorsContacts.getValueFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e =>
    dispatch(actionsContact.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
