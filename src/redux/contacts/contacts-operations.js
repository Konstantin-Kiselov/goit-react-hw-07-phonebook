import axios from 'axios';
import * as actions from './contacts-actions';

axios.defaults.baseURL = 'https://619aa3d027827600174452d9.mockapi.io';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }

  // .then(({ data }) => {
  //   dispatch(actions.fetchContactsSuccess(data));
  // })
  // .catch(error => dispatch(actions.fetchContactsError(error)));
};

const addContacts =
  ({ name, number: phone }) =>
  (dispatch, state) => {
    const {
      contacts: { items },
    } = state();

    if (items.some(state => state.name === name)) {
      alert(`${name} is already in contacts!`);
      return state;
    }

    const contact = {
      name,
      phone,
    };

    dispatch(actions.addContactRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => {
        return dispatch(actions.addContactSuccess(data));
      })
      .catch(error => dispatch(actions.addContactError(error)));
  };

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

const operations = { addContacts, deleteContact, fetchContacts };

export default operations;
