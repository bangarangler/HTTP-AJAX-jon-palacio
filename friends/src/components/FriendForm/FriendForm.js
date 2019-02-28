import React from "react";

import styles from "./FriendForm.module.scss";

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: "",
        age: "",
        email: "",
        id: ""
      }
    };
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(e, this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: "",
        id: ""
      }
    });
  };

  //changeHandler = e => {
  //this.setState({ [e.target.name]: e.target.value });
  //};

  render() {
    return (
      <React.Fragment>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Friend's Name"
            name="name"
            value={this.state.friend.name}
            //value={this.props.name}
            required
            onChange={this.changeHandler}
            //onChange={e =>
            //this.props.changeHandler({ [e.target.name]: e.target.value })
            //}
          />
          <input
            type="text"
            placeholder="Friend's Age"
            name="age"
            value={this.state.friend.age}
            //value={this.props.age}
            required
            onChange={this.changeHandler}
            //onChange={e =>
            //this.props.changeHandler({ [e.target.name]: e.target.value })
            //}
          />
          <input
            type="text"
            placeholder="Friend's Email"
            name="email"
            value={this.state.friend.email}
            //value={this.props.email}
            required
            onChange={this.changeHandler}
            //onChange={e =>
            //this.props.changeHandler({ [e.target.name]: e.target.value })
            //}
          />
          <button>Add Friend</button>
        </form>
      </React.Fragment>
    );
  }
}

export default FriendForm;
