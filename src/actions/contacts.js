import uuid from 'uuid';

// Add Contact
export const addContact = ({firstname = 'Anoymous', lastname = 'Anoymous'} = {}) => ({
    type: 'ADD_CONTACT',
    contact: {
        id: uuid(),
        firstname,
        lastname
    }
});