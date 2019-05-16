import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { addContact } from '../actions/contacts'


class AddContact extends Component  {
    render(props) {
        return (
            <div>
                <h3>Add Contact</h3>
                <ContactForm 
                    onSubmit={ (contact) => {
                        this.props.dispatch(addContact(contact));
                    }}
                />
            </div>
        );
    }
}

export default connect()(AddContact);