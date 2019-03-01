import React from "react";

import styles from "./Friend.module.scss";

const Friend = props => {
  console.log(props.friend.id);
  return (
    <div className={styles.Card}>
      <h2>Name: {props.friend.name}</h2>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <button
        id={props.id}
        onClick={(e, id) => props.removeFriend(e.target.id)}
      >
        Remove Friend
      </button>
    </div>
  );
};

export default Friend;
