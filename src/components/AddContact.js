import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { addContact } from '../actions/contacts'


const AddContact = (props) => {
    return (
        <div>
            <h3>Add Contact</h3>
            <ContactForm 
                onSubmit={ (contact) => {
                    props.dispatch(addContact(contact));
                    props.history.push('/dashboard');
                }}
            />
        </div>
    );
}

export default connect()(AddContact);