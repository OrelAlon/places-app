import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../assets/Avatar";
import Card from "../../assets/Card";
import "./UserItem.css";

const UserItem = ({ name, id, image, placeCount }) => {
  return (
    <>
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar image={image} alt={name} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>
                {placeCount} {placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
