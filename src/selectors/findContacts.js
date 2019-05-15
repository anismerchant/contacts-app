export default (contacts, {name, email, cell, sortBy}) => {
    return contacts.filter( contact => {
        const firstnameMatch = contact.firstname.toLowerCase().includes(name.toLowerCase());
        const lastnameMatch = contact.lastname.toLowerCase().includes(name.toLowerCase());
        
        return firstnameMatch || lastnameMatch;
    });
}