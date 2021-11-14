// import { useEffect, useState } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

// useEffect(() => {
//   const contactsLocalStor = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contactsLocalStor);

//   if (parsedContacts) {
//     setContacts(parsedContacts);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const [contacts, setContacts] = useState([
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]);
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   const contactsLocalStor = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contactsLocalStor);

//   if (parsedContacts) {
//     setContacts(parsedContacts);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const addContact = ({ name, number }) => {
//   const contact = {
//     id: uuidv4(),
//     name,
//     number,
//   };

//   setContacts(contacts => {
//     if (contacts.some(contact => contact.name === name)) {
//       alert(`${name} is already in contacts!`);
//       return contacts;
//     }
//     return [contact, ...contacts];
//   });
// };

// const deleteContact = contactId => {
//   setContacts(contacts =>
//     contacts.filter(contact => contact.id !== contactId),
//   );
// };

// const changeFitler = e => {
//   setFilter(e.target.value);
// };

// const visibleContacts = getVisibleContacts();
