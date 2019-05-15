const filtersReducerDefaultState = {
    name:'',
    email: undefined,
    cell: undefined,
    sortBy: 'firstname'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name: action.name
            }
        case 'SORT_BY_FIRST_NAME':
            return {
                ...state,
                sortBy: 'firstname'
            }
        case 'SORT_BY_LAST_NAME':
            return {
                ...state,
                sortBy: 'lastname'
            }
        default:
            return state;
    }
};

export default filtersReducer;