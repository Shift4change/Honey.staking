import React, { Component } from "react";
// import { storage } from '../firebase';
import "../components/assets/Profile.css"
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            errors: {},
            img: null,
            url: '',
            name:'',
            show : false
         
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

    }

    handleChange = e => {
        if (e.target.files[0]) {
            const img = e.target.files[0];
            this.setState(() => ({ img }));
        }
        console.log(e.target.files[0])
    }
    handleUpload = () => {
        const { show } = this.state;
        this.setState({ show : !show})
        // const { img } = this.state;
        // const { name } = this.state;
        // const uploadTask = storage.ref(`images/${img.name}`).put(img);
        // // uploadTask.on('state_changed',
        //     (snapshot) => {
        //         //progress function ...
        //     },
            // (error) => {
            //     //error function ...
            //     console.log(error);
            // }
            // ,
            // () => {
            //     //complete function ...
            //     // storage.ref('images')
            //         .child(img.name)
            //         .getDownloadURL()
            //         .then(url => {
            //             console.log(url);
            //             this.setState({ url });
            //         })
            // });
    }

    //setting name to profile page
    componentWillMount() {
        this.setState({
            first_name: localStorage.getItem("firstName"),

        })
    }
    logout = () => {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('firstName')
        window.location.replace('/')
        axios.get("/api/logout", {

        })
    }
    render() {
        return (
            <section className="container">
                <div className="card">
                    <h1>Hello {this.state.first_name}</h1>
                    <img src={this.state.url || "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png"} alt="Avatar" className="img" />
                    <button className="editBio" onClick={this.handleUpload}>✎</button>
                    { this.state.show && <Input/>}
                    <div className="container">
                        <textarea placeholder="Tell us about yourself!" cols="30" rows="2" className="bioInfo"></textarea>
                        <button className="editBio">✎</button>
                    </div>
                </div>
            </section>
        );
    }
}

class Input extends Component {
    render () {
        return(
            <input type="file" onChange={this.handleChange} htmlvalue="Upload" className="uploadPic"/>
        )
    }
}

export default Profile

/* <div className="all">
            <div className="container" style={{
                paddingTop: "60px",
                textAlign: "center",

            }}>
                <h1 style={{
                    fontSize: "40px",
                    marginTop: "20px"
                }}
                >Hello {this.state.first_name}</h1>
                <div>
                    <img src={this.state.url || 'https://www.jing.fm/clipimg/detail/293-2930824_corporate-png-images-transparent-png-user-placeholder.png'} alt="profilepic" style={{
                        borderRadius: "100px",
                        position: "relative"
                    }} />
                    <input type="file" onChange={this.handleChange} htmlvalue="Upload" className="uploadPic"/>
                    <button onClick={this.handleUpload}>Upload</button>
                    <h3>Bio:</h3>
                    <p className="container" style={{
                        maxWidth: "400px",
                        align: "center",
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum quas eos, vel voluptates consequatur sed nemo, exercitationem et unde minus distinctio iure iste maxime eaque officiis accusantium! Deserunt, placeat.</p>
                </div>
                <button onClick={this.logout} type="submit">Logout</button>
            </div>
            </div> */