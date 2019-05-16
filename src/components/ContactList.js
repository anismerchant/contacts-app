import React from 'react';
import { connect } from 'react-redux';
import ContactListPerson from './ContactListPerson';
import findContacts from '../selectors/findContacts';

// de-structured props
const ContactList = ({contacts}) => (
    <div>
        {contacts.length}
        {contacts.map((contact) => <ContactListPerson key={contact.id} {...contact} />)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        contacts: findContacts(state.contacts, state.filters)
    }
}

export default connect(mapStateToProps)(ContactList);