import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from "react-router-dom"
import React, { useEffect } from "react"
import { Login } from "./components/auth/Login"



function App() {
  return (
    <>
      <h1>hi</h1>
      <Route path="/login" render={props => <Login {...props} />} />

    </>
  );
}

export default App;
