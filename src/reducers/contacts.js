const contactsReducerDefaultState = [];

const contactsReducer = ( state = contactsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                action.contact
            ];
        default:
            return state;
    }
}

export default contactsReducer;