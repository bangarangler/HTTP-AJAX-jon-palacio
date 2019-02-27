import React from "react";

const friend = props => {
  return (
    <React.Fragment>
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </React.Fragment>
  );
};

export default friend;
