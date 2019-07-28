import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beginEditContact } from '../actions';
import ContactForm from './ContactForm';

export class EditContact extends Component {
    onSubmit = (contact) => {
        this.props.beginEditContact(this.props.contact.id, contact);
        this.props.history.push('/dashboard');
    }
    render() {
            return (
                <div class="form__section">
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
    beginEditContact: (id, contact) => dispatch(beginEditContact(id, contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);