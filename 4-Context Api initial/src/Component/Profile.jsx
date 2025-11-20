import { useContext } from "react";
import UserContext from "../context/UserContext"; // Check if path is correct
import React from "react"; 

function Profile() {
  const { user } = useContext(UserContext);  // Correctly using context
  console.log("Profile component rendered. Current user:", user); // Log the user data
  if (!user) {
    return <div> Please log in to view your Profile.</div>;
  }
  return <div>Welcome, {user.username}</div>;
}
export default Profile;
