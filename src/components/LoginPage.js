import React from 'react';
import { connect } from 'react-redux';
import { beginLogin } from '../actions/auth';

export const LoginPage = ({beginLogin}) => (
    <div>
        <button onClick={beginLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    beginLogin: () => dispatch(beginLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);