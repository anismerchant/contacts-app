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
        default:
            return state;
    }
};

export default filtersReducer;