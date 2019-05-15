const filtersReducerDefaultState = {
    firstName: '',
    lastName: '',
    email: undefined,
    cell: undefined,
    sortBy: 'firstname'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default filtersReducer;