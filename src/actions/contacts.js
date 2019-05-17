import database from '../firebase/firebase'

// Create
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contact
});

export const beginAddContact = ({firstname = '', lastname = '', email = '', cell = ''} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const contact = { firstname, lastname, email, cell }

        return database.ref(`users/${uid}/contacts`).push(contact).then( (ref) => {
            dispatch(addContact({
                id: ref.key,
                ...contact
            }));
        });
    };
};

// Read 
export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    contacts
});

export const beginSetContacts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid; 
        return database.ref(`users/${uid}/contacts`).once('value').then( (snapshot) => {
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

// Update
export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
});

export const beginEditContact = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid; 
        return database.ref(`users/${uid}/contacts/${id}`).update(updates).then( () => {
            dispatch(editContact(id, updates))
        })
    }
}

// Delete
export const removeContact = ({id} = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});

export const beginRemoveContact = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid; 
        return database.ref(`users/${uid}/contacts/${id}`).remove().then( () => {
            dispatch(removeContact({ id }));
        })
     
    };
};
