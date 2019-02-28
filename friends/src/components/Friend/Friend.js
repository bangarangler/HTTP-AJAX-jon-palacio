import React from "react";

import styles from "./Friend.module.scss";

const friend = props => {
  return (
    <div className={styles.Card}>
      <h2>Name: {props.friend.name}</h2>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <button>Remove Friend</button>
    </div>
  );
};

export default friend;
