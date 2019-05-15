import React, { Component } from 'react';
import ContactForm from './ContactForm';

class AddContact extends Component  {
    render() {
        return (
            <div>
                <h3>Add Contact</h3>
                <ContactForm />
            </div>
        );
    }
}

export default AddContact;