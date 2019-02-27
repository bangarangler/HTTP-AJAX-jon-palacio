import React from "react";

import styles from "./FriendForm.module.scss";

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      id: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form className={styles.Form} onSubmit={e => this.props.addFriend(e)}>
          <input
            type="text"
            placeholder="Friend's Name"
            name="name"
            value={this.state.name}
            required
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Friend's Age"
            name="age"
            value={this.state.age}
            required
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Friend's Email"
            name="email"
            value={this.state.email}
            required
            onChange={this.changeHandler}
          />
          <button>Add Friend</button>
        </form>
      </React.Fragment>
    );
  }
}

export default FriendForm;
