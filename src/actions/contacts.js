import database from '../firebase/firebase'

// Add Contact
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contact
});

export const beginAddContact = ({firstname = '', lastname = '', email = '', cell = ''} = {}) => {
    return (dispatch) => {
        const contact = { firstname, lastname, email, cell }

        return database.ref('contacts').push(contact).then( (ref) => {
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

// Set Contacts
export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    contacts
});


export const beginSetContacts = () => {
    return (dispatch) => { 
        return database.ref('contacts').once('value').then( (snapshot) => {
            const contacts = [];

            snapshot.forEach((childSnapshot) => {
                contacts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setContacts(contacts));
        });
    };
};