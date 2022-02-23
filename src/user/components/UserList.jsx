import React from "react";

import UserItem from "./UserItem";
import Card from "../../assets/Card";

import "./UserList.css";

const UserList = (props) => {
  if (props.items.length == 0) {
    return (
      <Card className="center">
        <h2>No users found.</h2>
      </Card>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UserList;

// id: "u1",
// name: "orel alon",
// image:
//   "https://pickupaction.co.il/wp-content/uploads/2017/09/Untitled-design-39.jpg",
// places: 3,
