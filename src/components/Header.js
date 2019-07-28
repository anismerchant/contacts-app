import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { beginLogout } from '../actions';

// de-structured props
export const Header = ({beginLogout}) => (
    <header>
        <div className= "header--logo-area">
            <div className= "header--logo">
                <h2>Contacts App</h2>
            </div>
            <button className="header--logout" onClick={beginLogout}>Logout</button>
        </div>
        <div className="header--menu">
            <NavLink activeClassName="selected" className="header--dashboard" to='/dashboard'>Dashboard</NavLink>
            <NavLink activeClassName="selected" className="header--add-contact"to='/add'>Add Contact</NavLink>
            <NavLink activeClassName="selected" className="header--feedback" to='/feedback'>Feedback</NavLink>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    beginLogout: () => dispatch(beginLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);