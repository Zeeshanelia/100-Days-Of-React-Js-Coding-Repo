import { useContext } from "react";
import UserContext from "../context/UserContext"; // Check if path is correct
 

function Profile() {
  const { user } = useContext(UserContext);  

  console.log("Profile component rendered. Current user:", user); 
  if (!user) {
    return <div> Please log in to view your Profile.</div>;
  }
  return <div>Welcome, {user.username}</div>;
}
export default Profile;
