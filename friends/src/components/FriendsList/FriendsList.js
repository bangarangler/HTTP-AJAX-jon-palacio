import React from "react";
import axios from "axios";
//import { Link, Route } from 'react-router-dom';

import Friend from "../Friend/Friend.js";
import FriendForm from "../FriendForm/FriendForm";

import styles from "./FriendsList.module.scss";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      friends: [],
      error: ""
      //name: "",
      //age: "",
      //email: "",
      //id: ""
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

  addFriend = (e, newFriend) => {
    e.preventDefault();
    console.log("test");
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log("error...", err));
  };

  //changeHandler = property => {
  //this.setState(property);
  //};

  //addFriend = e => {
  ////debugger;
  //e.preventDefault();
  //axios
  //.post("http://localhost:5000/friends", {
  //name: this.state.name,
  //age: this.state.age,
  //email: this.state.email
  //})
  //.then(res => {
  //this.setState({ friends: res.data, name: "", age: "", email: "" });
  //})
  //.catch(err => console.log("2nd error"));

  //this.setState({ name: "", age:"", email: "" });

  render() {
    return (
      <div className={styles.Wrapper}>
        <h1 className={styles.Heading}>List of Friends!</h1>
        <FriendForm
          addFriend={this.addFriend}
          //addFriend={this.addFriend}
          //name={this.state.name}
          //age={this.state.age}
          //email={this.state.email}
          //changeHandler={this.changeHandler}
        />
        {this.state.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
