import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, sortByFirstName, sortByLastName } from '../actions/filters';

const ContactListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.name} 
            onChange={(e) => props.dispatch(setNameFilter(e.target.value))}
        />
        <select
            value={props.filters.sortBy}
            onChange = {(e) => 
            {e.target.value === "firstname" 
            ? props.dispatch(sortByFirstName())
            : props.dispatch(sortByLastName())
            }}
        >
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
