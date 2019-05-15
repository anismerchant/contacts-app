const filtersReducerDefaultState = {
    firstName: '',
    lastName: '',
    sortBy: 'firstName'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default filtersReducer;