import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1> Contacts App</h1>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/add'>Add Contact</NavLink>
        <NavLink to='/feedback'>Feedback</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);