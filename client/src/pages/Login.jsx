import React, { Component } from "react"
import axios from "axios"



class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
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
        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response)
            if (response.data) {
                console.log('login success')
                console.log(response.data)
                console.log(response.data.id)
                // localStorage.setItem("name", name)
                window.location.replace("/profile")
                console.log(response.data.name)
                this.setState({
                    errors: response.data,
                    name: response.data.name,
                    token: response.data.id
                })
                localStorage.setItem("firstName", response.data.name)
                localStorage.setItem("jwtToken", response.data.id)
            } else {
                console.log('sign in error')
                return;
            }
        }).catch(err => {
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
                    <label className="form-label" for="input-example-1">Email</label>
                    <input className="form-input" type="email" name="email" value={this.state.email} id="input-example-1" onChange={this.handleChange} placeholder="Email" required />
                    <label className="form-label" for="input-example-1">Password</label>
                    <input className="form-input" type="password" name="password" value={this.state.password} id="input-example-1" onChange={this.handleChange} placeholder="Password" required />
                    {this.state.errors.userNotFound && <small>{this.state.errors.userNotFound}</small>}
                    <button
                        type="submit"
                        style={{
                            marginTop: "10px"
                        }}
                    >Sign In</button>
                </form>
            </div>
            </div>
        );
    }
}
export default SignUp