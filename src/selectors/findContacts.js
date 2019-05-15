export default (contacts, {name, email, cell, sortBy}) => {
    return contacts.filter( contact => {
        // implement search filter for only firstname and lastname
        const firstnameMatch = contact.firstname.toLowerCase().includes(name.toLowerCase());
        const lastnameMatch = contact.lastname.toLowerCase().includes(name.toLowerCase());
        return firstnameMatch || lastnameMatch;
    }).sort ( (a,b) => {
        let sortName;
        if (sortBy === 'firstname') {
            // sort by ascending order
            sortName = a.firstname < b.firstname ? -1 : 1; 
        } else if (sortBy === 'lastname') {
            sortName = a.lastname < b.lastname ? -1 : 1;
        }
        return sortName;
    });
};