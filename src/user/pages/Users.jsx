import React from "react";

import UserList from "../components/UserList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "orel alon",
      image:
        "https://pickupaction.co.il/wp-content/uploads/2017/09/Untitled-design-39.jpg",
      places: 3,
    },
  ];
  return (
    <>
      <h1>users:</h1>
      <UserList items={USERS} />
    </>
  );
}

export default Users;
