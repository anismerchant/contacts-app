import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
            firstname: props.contact ? props.contact.firstname : '',
            lastname: props.contact ? props.contact.lastname : '',
            email: props.contact ? props.contact.email : '',
            cell: props.contact ? props.contact.cell : '',
            error:''
        };
    }

    onFirstnameChange = (e) => {
        const firstname = e.target.value;
        this.setState(()=> ({firstname}))
    };
    onLastnameChange = (e) => {
        const lastname = e.target.value;
        this.setState(()=> ({lastname}))
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email}))
    };
    onCellChange = (e) => {
        const cell = e.target.value;
        this.setState(()=> ({cell}));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.firstname || !this.state.cell) {
            this.setState( () => ({error: 'First name and phone number are required fields.'}));
        } else {
            this.setState( () => ({error: ''}));
            this.props.onSubmit({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                cell: this.state.cell
            })
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="First Name"
                        id="firstname"
                        autoFocus
                        value={this.state.firstname}
                        onChange={this.onFirstnameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Last Name"
                        id="lastname"
                        value={this.state.lastname}
                        onChange={this.onLastnameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Email" 
                        id="email"
                        pattern="[^@\s]+@[^@\s]+" 
                        title="Invalid email address." 
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <input 
                        type="tel"
                        placeholder="Phone (xxx-xxx-xxxx)" 
                        id="cell" 
                        pattern="^\d{3}-\d{3}-\d{4}$" 
                        value={this.state.cell}
                        onChange={this.onCellChange}
                    />
                    <button>Add Contact</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;