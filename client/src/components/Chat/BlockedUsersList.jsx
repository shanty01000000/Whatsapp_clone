// BlockedUsersList.jsx
import React from "react";
import { useStateProvider } from "@/context/StateContext";

const BlockedUsersList = () => {
  const [{ blockedUsers }] = useStateProvider();

  return (
    <div>
      <h2>Blocked Users</h2>
      <ul>
        {blockedUsers.map(userId => (
          <li key={userId}>User ID: {userId}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockedUsersList;
