import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/changeFilter');

// export const fetchContactsRequest = createAction(
//   'contacts/fetchContactsRequest'
// );
// export const fetchContactsSuccess = createAction(
//   'contacts/fetchContactsSuccess'
// );
// export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// export const deleteContactRequest = createAction(
//   'contacts/deleteContactRequest'
// );
// export const deleteContactSuccess = createAction(
//   'contacts/deleteContactSuccess'
// );
// export const deleteContactError = createAction('contacts/deleteContactError');

// ================== STEP 2 ==================

// const addContacts = createAction('contacts/add', ({ name, number }) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   };
// });

// const deleteContacts = createAction('contacts/delete');
// const changeFilter = createAction('contacts/changeFitler');

// const contactsActions = {
// addContactRequest,
// addContactSuccess,
// addContactError,
// deleteContacts,
// changeFilter,
// };

// export default contactsActions;

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
