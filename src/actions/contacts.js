import uuid from 'uuid';
import database from '../firebase/firebase'

// Add Contact
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contact
});

export const beginAddContact = ({firstname = '', lastname = '', email = '', cell = ''} = {}) => {
    return (dispatch) => {
        const contact = { firstname, lastname, email, cell }

        database.ref('contacts').push(contact)
        .then( (ref) => {
            dispatch(addContact({
                id: ref.key,
                ...contact
            }));
        });
    };
};

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