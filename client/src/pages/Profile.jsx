import React, { Component } from "react"
import axios from "axios"

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            errors: {},  
            selectedFile: null
        }
    }

  fileSelectedHandler = event => {
    this.setState({
        selectedFile:event.target.files[0]
    })
      console.log(event.target.files[0]);
  }
  fileUploadHandle =() => {
     axios.post('')
  }
    //set up edit functionality 
    
    // handleFormChange(event) {
    //     console.log("handle change", event)
    
    // }
    //setting name to profile page
    componentWillMount() {
        this.setState({
            first_name: localStorage.getItem("firstName"),
            selectedFile: localStorage.getItem("name")
            
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
            <div className="all">
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3hESwg2C1h208A1VDc1hglIOGz_rWrqtMxcyQHzd5VUBAYhd_&usqp=CAU" alt="profilepic" style={{
                        borderRadius: "100px",
                        position: "relative"
                    }} />
                    <input type="file" onChange={this.fileSelectedHandler} htmlvalue="Upload" className="uploadPic"/>
                    <button onClick={this.fileSelectedHandler}>Upload</button>
                    <h3>Bio:</h3>
                    <p className="container" style={{
                        maxWidth: "400px",
                        align: "center",
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum quas eos, vel voluptates consequatur sed nemo, exercitationem et unde minus distinctio iure iste maxime eaque officiis accusantium! Deserunt, placeat.</p>
                </div>
                <button onClick={this.logout} type="submit">Logout</button>
            </div>
            </div>
        );
    }


}

export default Profile