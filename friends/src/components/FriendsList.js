import React from "react";
import axios from "axios";

import Friend from "./Friend";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log("something went wrong");
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>test</h1>
        {this.state.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </React.Fragment>
    );
  }
}

export default FriendsList;
