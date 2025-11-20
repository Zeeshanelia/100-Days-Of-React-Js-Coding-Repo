import UserContextProvider from './context/UserContextProvider'
import './App.css'
import React from "react";
import Login from './Component/Login'
import Profile from './Component/Profile'
export default function App() {

  return (
    <UserContextProvider >
      <h3> context api idea </h3>
     <Login/>
     <Profile/>
    </UserContextProvider>

  )
}