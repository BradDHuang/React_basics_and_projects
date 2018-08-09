
import React, {Component} from "react";
import axios from "axios";
import "../App/style.css";

import {Link} from "react-router-dom";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}; // result data type.
  }
  
  // show = (username) => {
  componentDidMount() {
  // componentDidMount is the right place to get some data to render the page
  
    this.setState({ clicked: true});
    // axios({ method: "get", url: "https://api.github.com/users/" + username })
    axios({ method: "get", url: "https://api.github.com/users/" + this.props.match.params.login })
      .then(response => {
        console.log(response);
        this.setState({ name: response.data.name,
                        location: response.data.location,
                        following: response.data.following,
                        followers: response.data.followers
        });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }
  
  render() {
    const {name, location, following, followers, clicked} = this.state;
    return (
        <div className="form_style">
            <h2>{"User Details Page"}</h2>
            <Link to="/users"><button>UserList</button></Link>
            <br />
            <br />
            <Link to="/"><button>Home</button></Link>
            <br />
            <br />
            
            <h3 className="details_h3">{"User Details:"}</h3>
            <div className="details">
                {clicked? `Name: ${name}` : ""}<br />
                {clicked? `Location: ${location}` : ""}<br />
                {clicked? `Following: ${following}` : ""}<br />
                {clicked? `Followers: ${followers}` : ""}<br />
            </div>
        </div>    
    );
  }
}

export default UserDetail;





