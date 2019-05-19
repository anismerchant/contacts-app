import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const PageNotFound = () => (
    <div className= "page-not-found__section">
        <Header />
        <p className="page-not-found__section--msg">
            Oops, there's nothing here. Please try another page.
        </p>
        <div className="page-not-found__section--back-link">
            <Link to='/'>Back to Home</Link>
        </div>
    </div>
);

export default PageNotFound;