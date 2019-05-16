import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editContact } from '../actions/contacts';
import ContactForm from './ContactForm';

export class EditContact extends Component {
    onSubmit = (contact) => {
        this.props.editContact(this.props.contact.id, contact);
        this.props.history.push('/dashboard');
    }
    render() {
            return (
                <div>
                    <ContactForm 
                        contact={this.props.contact}
                        onSubmit={this.onSubmit}
                    />
                </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    contact: state.contacts.find(contact => contact.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editContact: (id, contact) => dispatch(editContact(id, contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);