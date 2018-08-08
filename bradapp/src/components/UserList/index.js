
import React, {Component} from "react";
import axios from "axios";
import "../App/style.css";
import {Link} from "react-router-dom";
function List(props) {
  const imgStyle = { width: 100, height: 100 };
  return (
    <tr onClick={props.showDetails}>
      <td>{props.id}</td>
      <td>{props.login}</td>
      <td>
        <img style={imgStyle} src={props.avatar_url} alt={props.avatar_url} />
      </td>
    </tr>
  );
}

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], clickedAUser: false }; // result data type.
  }
  componentDidMount() {
    axios({ method: "get", url: "https://api.github.com/users?per_page=100"})
      .then(response => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }
  showUserDetails = (username) => {
    // <Link to={`/users/${username}`}>{username}</Link>;
  }
  
  render() {
    // const {clickedAUser, name, location, following, followers} = this.state;
    return (
        <div>
        <Link to="/">Home</Link>
        <div className="table">
          <h3>{"List"}</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => {
                return <List key={item.id} {...item} showDetails={() => this.showUserDetails(item.login)} />;
              })}
            </tbody>
          </table>
        </div>
        
        </div>
    );
    
  }
}

export default UserList;



