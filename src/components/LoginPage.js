import React from 'react';
import { connect } from 'react-redux';
import { beginLogin } from '../actions';

// de-structured props
export const LoginPage = ({beginLogin}) => (
    <div className="login">
        <div className="login--box">
            <h1 className="login--title">Contacts App</h1>    
            <p className="login--tagline">Build Your Contacts</p>
            <div className="login--button-container">
                <button className="login--button" onClick={beginLogin}>Login with Google</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    beginLogin: () => dispatch(beginLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);