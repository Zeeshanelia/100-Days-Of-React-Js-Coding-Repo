import { useState } from 'react'
import { useReducer } from "react"

const logInReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload
      }
    }
    case "logIn": {
      return {
        ...state,
        error: ''
      }
    }


    case "success":
      return {
        ...state,
        username: "",           // Clear username after successful login
        password: "",           // Clear password
        loginedIn: true,         // Mark user as logged in
        error: "",               // Clear any previous error
      };



    case "error": {
      return {
        ...state,
        error: 'incorrect username or password',
        loginedIn: false,
        username: "",
        password: ''
      }
    }


    case "logOut": {
      return {
        ...state,
        loginedIn: false,          // Mark user as logged out
      }
    }
    default: return state
  }
}



function App() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [loginedIn, setLoginedIn] = useState(false)
  // const [error, setError] = useState(null)
  const [hideShow, setHideShow] = useState(false)
  const [state, dispatch] = useReducer(logInReducer, {
    username: "",
    password: "",
    loginedIn: false,
    error: ""
  })


  const handleSubmitFrom = (e) => {
    e.preventDefault();
    // setError(null)
    dispatch({ type: 'logIn' })
    try {

      // Check if username (email) is empty
      if (!state.username) {
        throw new Error("Name cannot be empty");
      }



      if (state.username === "zeeshan" && state.password === "12345") {
        // setLoginedIn(true)
        dispatch({ type: 'success' })
        console.log("User logged in successfully:", state.username);
      }
      else {
        throw new Error("Invalid Username or Password")
      }

      //alternative use case

      // if (username === " " || password === "") {
      //   throw new Error("Username or Password is missing")
      // }
    } catch (error) {
      // alert(error.message)
      // setError(error.message)
      // setUsername("")
      // setPassword("")
      dispatch({ type: 'error' })
    }

    // console.log({ username, password });
    console.log({ username: state.username, password: state.password });

  }


  return (
    <>
      <div className='w-4/12 bg-gray-200 mx-auto  shadow-xl p-3 mt-2 rounded-lg'>
        <h1 className="text-xl font-bold text-center">  UseReducer Form </h1>

        <p className="text-center">
          {
            state.loginedIn ?
              (<> <h2 className="text-lg font-semibold p-6">
                Welcome, {state.username}!</h2>
                <button className="bg-pink-300 border text-white w-full p-2"
                  // onClick={() => setLoginedIn(false)
                  onClick={() => dispatch({ type: 'logOut' })
                  }
                >  Logout</button>   </>)
              :
              ("You are not logged in")
          } </p>


        {
          !state.loginedIn && (


            <form onSubmit={handleSubmitFrom}>

              <div className="space-y-1.5">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Name or Email
                </label>

                <input
                  id="username"
                  type="username"
                  autocomplete="username"
                  value={state.username}
                  onChange={(e) =>
                    dispatch({ type: 'field', fieldName: 'username', payload: e.target.value })
                  }
                  placeholder="name or your@example.com"
                  className="block w-full px-4 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>


              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input type="password" autocomplete="current-password" value={state.password}
                  //onChange={(e) => setPassword(e.target.value)} 
                  onChange={(e) => dispatch({
                    type: 'field',
                    fieldName: "password",
                    payload: e.target.value
                  })}

                  placeholder="password" className="block w-full px-4 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
              </div>


              <button type="submit" className="bg-blue-500 text-white w-full p-2 mt-10 rounded-lg"> Login </button>

              <p className="p-2 border text-center text-red-700 font-semibold">{state.error}</p>
            </form>
          )}
      </div>


      <div className="w-4/12  mx-auto text-center   p-3 mt-2s rounded-lg">

        {hideShow && (
          <div className="mt-4 p-4 border bg-gray-100 rounded-lg">
            <p>Username: zeeshan</p>
            <p>Password: 12345</p>
          </div>
        )}



        <button
          onClick={() => setHideShow(!hideShow)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {!hideShow ? "Hide" : "Show"} Login Id
        </button>


      </div>


    </>)
}
export default App;
