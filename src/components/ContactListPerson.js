import React from 'react';

// de-structured props
const ContactListPerson = ({firstname, lastname, email, cell}) => (
    <div>
        <p>{`${firstname} ${lastname} ${email} ${cell}`}</p>
    </div>
);

export default ContactListPerson;