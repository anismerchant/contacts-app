import React from 'react';
import { removeContact } from '../actions/contacts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// de-structured props
const ContactListPerson = ({dispatch, id, firstname, lastname, email, cell}) => (
    <div>
        <p>{`${firstname} ${lastname} ${email} ${cell}`}</p>
        <Link to={`/edit/${id}`}><div>Edit</div></Link>
        <button onClick={ () => {dispatch(removeContact({id}))
        }}>Remove</button>
    </div>
);

export default connect()(ContactListPerson);