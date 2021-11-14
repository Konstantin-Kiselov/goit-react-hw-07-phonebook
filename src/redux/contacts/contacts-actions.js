// import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// ================== STEP 2 ==================

const addContacts = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContacts = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFitler');

const contactsActions = { addContacts, deleteContacts, changeFilter };

export default contactsActions;

// ================== STEP 1 ==================

// const addContacts = ({ name, number }) => ({
//   type: ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContacts = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
