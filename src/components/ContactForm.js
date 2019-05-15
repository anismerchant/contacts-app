import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <form>
                <input 
                    type="text"
                    placeholder="First Name"
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                />
                <input 
                    type="email"
                    placeholder="Email" 
                    id="email"
                    pattern=".+@globex.com" 
                    size="30" 
                />
                <input 
                    type="tel"
                    placeholder="Cell" 
                    id="cell" 
                    name="cell"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
            </form>
        );
    }
}

export default ContactForm;