import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        Oops, there's nothing here. Please try another page.
        <br />
        <Link to='/'>Back to Home</Link>
    </div>
);

export default PageNotFound;