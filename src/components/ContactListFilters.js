import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, sortByFirstName, sortByLastName } from '../actions/filters';

const ContactListFilters = (props) => (
    <div>
        <input 
            type="text" 
            placeholder="Search"
            value={props.filters.name} 
            onChange={(e) => props.dispatch(setNameFilter(e.target.value))}
        />
        <select
            value={props.filters.sortBy}
            onChange = {(e) => 
            {
                if (e.target.value === "firstname") {
                    props.dispatch(sortByFirstName())
                } else if (e.target.value === "lastname") {
                    props.dispatch(sortByLastName())
                } 
            }}
        >   
            <option value="" disabled>Sort by</option>
            <option value="firstname">First Name</option>
            <option value="lastname">Last Name</option>
        </select>
    </div>

);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ContactListFilters);
