import React from 'react';
import { beginRemoveContact } from '../actions/contacts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// de-structured props
const ContactListPerson = ({dispatch, id, firstname, lastname, email, cell}) => (
    <div>
        <p>{`${firstname} ${lastname} ${email} ${cell}`}</p>
        <Link to={`/edit/${id}`}><div>Edit</div></Link>
        <button onClick={ () => {dispatch(beginRemoveContact({id}))
        }}>Remove</button>
    </div>
);

export default connect()(ContactListPerson);