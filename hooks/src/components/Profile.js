import React from "react";

function Profile({ userData }) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <p className="h2">User ID: {userData.id}</p>
        </li>
        <li className="list-group-item">
          <strong>Nom: {userData.name}</strong>
        </li>
        <li className="list-group-item">
          <strong>Pseudo: {userData.username}</strong>
        </li>
        <li className="list-group-item">
          <strong>Email: {userData.email}</strong>
        </li>
      </ul>
    </div>
  );
}

export default React.memo(Profile);
