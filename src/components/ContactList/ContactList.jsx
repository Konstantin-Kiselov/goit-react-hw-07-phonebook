import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact, isLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      {isLoading ? (
        <h1>Загружаем...</h1>
      ) : (
        <ul className={s.list}>
          {contacts.map(({ id, name, number, phone }) => (
            <Contact
              key={id}
              name={name}
              number={number || phone}
              onClick={() => onDeleteContact(id)}
            />
          ))}
        </ul>
      )}
      {/* {isLoading && <h1>Загружаем...</h1>}
      <ul className={s.list}>
        {contacts.map(({ id, name, number, phone }) => (
          <Contact
            key={id}
            name={name}
            number={number || phone}
            onClick={() => onDeleteContact(id)}
          />
        ))}
      </ul> */}
    </>
  );
};
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter, loading } }) => ({
  contacts: getVisibleContacts(items, filter),
  isLoading: loading,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
