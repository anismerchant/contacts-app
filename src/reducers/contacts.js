const contactsReducerDefaultState = [];

const contactsReducer = ( state = contactsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                action.contact
            ];
        case 'SET_CONTACTS':
            return action.contacts;
        case 'REMOVE_CONTACT':
            return state.filter( ({id}) => id !== action.id );
        case 'EDIT_CONTACT':
            return state.map( (contact) => {
                return (contact.id === action.id) 
                ? {...contact, ...action.updates} 
                : contact
            });
        default:
            return state;
    }
}

export default contactsReducer;