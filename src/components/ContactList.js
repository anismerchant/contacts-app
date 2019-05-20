import React from 'react';
import { connect } from 'react-redux';
import ContactListPerson from './ContactListPerson';
import findContacts from '../selectors/findContacts';

// de-structured props
const ContactList = ({contacts}) => (
    <div className="contactlist__container">
        <div className="contact--stats">
            {'You have a total of'}<span className="contact--number">&nbsp;{contacts.length} {'people'}&nbsp;</span>{' in your contact list.'}
        </div>
        <div className = "contact__cards">
            {contacts.map((contact) => <ContactListPerson key={contact.id} {...contact} />)}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        contacts: findContacts(state.contacts, state.filters)
    }
}

export default connect(mapStateToProps)(ContactList);