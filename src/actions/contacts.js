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

// Remove Contact
export const removeContact = ({id} = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});

// Edit Contact
export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
});