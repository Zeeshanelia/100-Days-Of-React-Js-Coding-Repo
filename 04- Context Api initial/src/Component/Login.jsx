// Importing React and React hooks
import { useContext, useState } from "react"; // useState is for managing component state; useContext is for accessing context data
import UserContext from "../context/UserContext"; // Importing the custom UserContext we created elsewhere
import React from "react"; // Importing the main React library (not strictly needed if you're using React 17+ with JSX transform)

// Define the Login component
function Login() {
  // Local state for username input field
  const [username, setUserName] = useState("");

  // Local state for password input field
  const [password, setPassword] = useState("");

  /**
   * Using the useContext hook to access the value from UserContext.
   * We're destructuring to extract only the setUser function from the context.
   * This allows us to update the global user state when the form is submitted.
   */
  const { setUser } = useContext(UserContext);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    
    // Log entered username and password to the console
    console.log("Logging in with", { username, password });
    
    // Call setUser to update the global user context with the entered credentials
    setUser({ username, password });
  };

  // Return the JSX for rendering the form
  return (
    <div className="flex flex-col items-center">
      <h1>Login</h1>

      {/* Form element that calls handleSubmit when submitted */}
      <form onSubmit={handleSubmit}>
        
        {/* Input for username */}
        <input
          value={username} // Binds the input to username state
          onChange={(e) => setUserName(e.target.value)} // Updates state on user input
          type="text"
          placeholder="username"
          className="mb-2 mt-2 border-2 border-gray-300"
        />

        {/* Input for password */}
        <input
          value={password} // Binds the input to password state
          onChange={(e) => setPassword(e.target.value)} // Updates state on user input
          type="password"
          className="mb-2 mt-2 border-2 border-gray-300"
          placeholder="password"
        />

        {/* Submit button */}
        <button className="mb-2 mt-2 border-2 border-gray-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

// Export the Login component for use in other parts of the app
export default Login;
