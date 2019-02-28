import React from "react";

import styles from "./FriendForm.module.scss";

class FriendForm extends React.Component {
  constructor() {
    super();
    //this.state = {
    //name: "",
    //age: "",
    //email: "",
    //id: ""
    //};
  }

  //changeHandler = e => {
  //this.setState({ [e.target.name]: e.target.value });
  //};

  render() {
    return (
      <React.Fragment>
        <form className={styles.Form} onSubmit={e => this.props.addFriend(e)}>
          <input
            type="text"
            placeholder="Friend's Name"
            name="name"
            value={this.props.name}
            required
            onChange={e =>
              this.props.changeHandler({ [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Friend's Age"
            name="age"
            value={this.props.age}
            required
            onChange={e =>
              this.props.changeHandler({ [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Friend's Email"
            name="email"
            value={this.props.email}
            required
            onChange={e =>
              this.props.changeHandler({ [e.target.name]: e.target.value })
            }
          />
          <button>Add Friend</button>
        </form>
      </React.Fragment>
    );
  }
}

export default FriendForm;
