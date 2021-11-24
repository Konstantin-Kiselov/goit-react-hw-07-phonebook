import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.fulfilled]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.fulfilled]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

// ================== STEP 2 ==================

// const items = createReducer(initialState, {
//   [addContacts]: (state, { payload }) => {
//     if (state.some(({ name }) => name === payload.name)) {
//       alert(`${payload.name} is already in contacts!`);
//       return state;
//     }
//     return [...state, payload];
//   },
//   [deleteContacts]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });

// ================== STEP 1 ==================

// const items = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       if (state.some(({ name }) => name === payload.name)) {
//         alert(`${payload.name} is already in contacts!`);
//         return state;
//       }

//       return [...state, payload];

//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
