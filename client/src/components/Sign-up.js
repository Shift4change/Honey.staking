import React from 'react';
import axios from 'axios';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log("handle change", event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('form submitted')
        event.preventDefault();
        axios.post('https://localhost:3000/signup', {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response)
            if(response.data){
                console.log('signup success')
                this.setState({
                    redirectTo: "/login"
                })
            } else {
                console.log('signup error')
            }
        }).catch(err => {
            //this is where i left off
            console.log(err)
        })
    }
    render() {
        return (
            <div onSubmit={this.handleSubmit} className="container column col-4 col-xs-12">
                <form className="form-group">
                    <label className="form-label" for="input-example-1">Email</label>
                    <input className="form-input" type="email" name="email" value={this.state.email} id="input-example-1" onChange={this.handleChange} placeholder="Email" required />
                    <label className="form-label" for="input-example-1">Password</label>
                    <input className="form-input" type="password" name="password" value={this.state.password} id="input-example-1" onChange={this.handleChange} placeholder="Password" required />
                    <label className="form-label" for="input-example-1">Confirm Password</label>
                    <input className="form-input" type="password" name="password_confirmation" value={this.state.password_confirmation} id="input-example-1" onChange={this.handleChange} placeholder="Password Confirmation" required />
                    <button
                        type="submit"
                        style={{
                            marginTop: "10px"
                        }}
                    >Sign Up</button>
                </form>
            </div>
        );
    }
}