import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { beginLogout } from '../actions/auth';

// de-structured props
export const Header = ({beginLogout}) => (
    <header>
        <h1> Contacts App</h1>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/add'>Add Contact</NavLink>
        <NavLink to='/feedback'>Feedback</NavLink>
        <button onClick={beginLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    beginLogout: () => dispatch(beginLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);