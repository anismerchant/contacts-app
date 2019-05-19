import React from 'react';
import { connect } from 'react-redux';
import { beginLogin } from '../actions/auth';

// de-structured props
export const LoginPage = ({beginLogin}) => (
    <div className="login">
        <div className="login--box">    
            <h1 className="login--tagline">Build Your Contacts</h1>
            <button 
                className="login--button" 
                onClick={beginLogin}
            >Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    beginLogin: () => dispatch(beginLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);