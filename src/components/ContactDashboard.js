import React from 'react';
import ContactList from './ContactList';
import ContactListFilters from './ContactListFilters';

const ContactDashboard = () => (
    <div className="contact__section">
        <h5>Your Contact List</h5>
        <ContactListFilters />
        <ContactList />
    </div>
);

export default ContactDashboard;