import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div className= "page-not-found__section">
        <p className="page-not-found__section--msg">
            Oops, there's nothing here. Please try another page.
        </p>
        <div className="page-not-found__section--back-link">
            <Link to='/'>Back to Home</Link>
        </div>
    </div>
);

export default PageNotFound;