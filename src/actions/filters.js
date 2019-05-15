export const setNameFilter = (name = '') => ({
    type: 'SET_NAME_FILTER',
    name
});

export const sortByFirstName = () => ({
    type: 'SORT_BY_FIRST_NAME'
});

export const sortByLastName = () => ({
    type: 'SORT_BY_LAST_NAME'
});