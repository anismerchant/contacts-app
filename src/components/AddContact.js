import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { beginAddContact }  from '../actions/contacts'

export const AddContact = (props) => {
    return (
        <div className="form__section">
            <h5>Build Your Contact List</h5>
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