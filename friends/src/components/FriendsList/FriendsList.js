import React from "react";
import axios from "axios";

import Friend from "../Friend/Friend.js";
import FriendForm from "../FriendForm/FriendForm";

import styles from "./FriendsList.module.scss";

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

  addFriend = e => {
    debugger;
    e.preventDefault();
    axios.post("http://localhost:5000/friends", {
      friends: [
        ...this.state.friends,
        this.state.name,
        this.state.age,
        this.state.email
      ]
    });
    this.setState({ name: "", age: "", email: "" });
    //this.setState({
    //friends: [
    //...this.state.friends,
    //...this.state.error,
    //this.state.name,
    //this.state.age,
    //this.state.email
    //],
    //name: "",
    //age: "",
    //email: ""
    //});
  };

  render() {
    return (
      <div className={styles.Wrapper}>
        <h1 className={styles.Heading}>List of Friends!</h1>
        <FriendForm addFriend={this.addFriend} />
        {this.state.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
