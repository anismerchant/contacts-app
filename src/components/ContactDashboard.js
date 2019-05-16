import React from 'react';
import ContactList from './ContactList';
import ContactListFilters from './ContactListFilters';

const ContactDashboard = () => (
    <div>
        <h2>Contact List</h2>
        <ContactListFilters />
        <ContactList />
    </div>
);

export default ContactDashboard;