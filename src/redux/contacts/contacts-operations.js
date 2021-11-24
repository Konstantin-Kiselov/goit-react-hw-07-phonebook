import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import * as actions from './contacts-actions';

axios.defaults.baseURL = 'https://619aa3d027827600174452d9.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const {
      data: { id },
    } = await axios.delete(`/contacts/${contactId}`);
    return id;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number: phone }) => {
    const contact = { name, phone };

    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

// const addContacts =
//   ({ name, number: phone }) =>
//   (dispatch, state) => {
//     const {
//       contacts: { items },
//     } = state();

// if (items.some(state => state.name === name)) {
//   alert(`${name} is already in contacts!`);
//   return state;
// }

//     const contact = {
//       name,
//       phone,
//     };

//     dispatch(actions.addContactRequest());

//     axios
//       .post('/contacts', contact)
//       .then(({ data }) => {
//         return dispatch(actions.addContactSuccess(data));
//       })
//       .catch(error => dispatch(actions.addContactError(error)));
//   };

// const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(actions.fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

// const deleteContact = contactId => dispatch => {
//   dispatch(actions.deleteContactRequest());

// axios
//   .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(actions.deleteContactSuccess(contactId)))
//     .catch(error => dispatch(actions.deleteContactError(error)));
// };

// const operations = { addContact, deleteContact, fetchContacts };

// export default operations;
