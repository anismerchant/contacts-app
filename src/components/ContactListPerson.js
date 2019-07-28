import React from 'react';
import { beginRemoveContact } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// de-structured props
const ContactListPerson = ({dispatch, id, firstname, lastname, email, cell}) => (
    <div className = "contact__cards--individual">
        <h4>{`${firstname} ${lastname}`}</h4>
        <p>{email}</p>
        <p>{cell}</p>
        
        <div className="contact__cards--actions">
            <Link to={`/edit/${id}`}><button className="contact__cards--edit">Edit</button></Link>
            <button className="contact__cards--remove" onClick={ () => {dispatch(beginRemoveContact({id}))
            }}>Remove</button>
        </div>

    </div>
);

export default connect()(ContactListPerson);