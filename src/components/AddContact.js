import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { beginAddContact }  from '../actions/contacts'

export const AddContact = (props) => {
    return (
        <div>
            <h3>Add Contact</h3>
            <ContactForm 
                onSubmit={ (contact) => {
                    props.dispatch(beginAddContact(contact));
                    props.history.push('/dashboard');
                }}
            />
        </div>
    );
}

export default connect()(AddContact);