import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';
// import { ADD, CHANGE_FILTER, DELETE } from './contacts-types';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// ================== STEP 2 ==================

const items = createReducer(initialState, {
  [contactsActions.addContacts]: (state, { payload }) => {
    if (state.some(({ name }) => name === payload.name)) {
      alert(`${payload.name} is already in contacts!`);
      return state;
    }
    return [...state, payload];
  },
  [contactsActions.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

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
