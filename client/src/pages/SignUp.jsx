import React, { Component } from "react"
import axios from "axios"


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
            errors: {}
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
        axios.post('/api/createuser', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password
        }).then(response => {
            console.log(response)
            if (response.data) {
                console.log('signup success')
                window.location.replace("/login")
                this.setState({
                    redirectTo: "/login",
                    errors: response.data
                })
            }
        }).catch(err => {
            //this is where i left off
            console.log(err)
            this.setState({
                errors: err
            })
        })
    }
    render() {
        return (
            <div className="all">
            <div onSubmit={this.handleSubmit} className="container column col-4 col-xs-12"
                style={{
                    paddingTop: "100px"
                }}>
                <form className="form-group">
                    <label className="form-label" for="input-example-1">First Name</label>
                    <input className="form-input" type="text" name="first_name" value={this.state.first_name} id="input-example-1" onChange={this.handleChange} placeholder="First Name" required />
                    <label className="form-label" for="input-example-1">Last Name</label>
                    <input className="form-input" type="text" name="last_name" value={this.state.last_name} id="input-example-1" onChange={this.handleChange} placeholder="Last Name" required />
                    <label className="form-label" for="input-example-1">Email</label>
                    <input className="form-input" type="email" name="email" value={this.state.email} id="input-example-1" onChange={this.handleChange} placeholder="Email" required />
                    <label className="form-label" for="input-example-1">Password</label>
                    <input className="form-input" type="password" name="password" value={this.state.password} id="input-example-1" onChange={this.handleChange} placeholder="Password" required />
                    <label className="form-label" for="input-example-1">Confirm Password</label>
                    <input className="form-input" type="password" name="confirm_password" value={this.state.confirm_password} id="input-example-1" onChange={this.handleChange} placeholder="Confirm Password" required />
                    {this.state.errors.passwordDoesNotMatch && <small>{this.state.errors.passwordDoesNotMatch}</small>}
                    <button
                        type="submit"
                        style={{
                            marginTop: "10px"
                        }}
                    >Sign Up</button>
                </form>
            </div>
            </div>
        );
    }
}
export default SignUp