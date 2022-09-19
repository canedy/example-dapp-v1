import './App.css';
// import { getGreeting } from "./cadence/scripts/getGreeting.js";
import React, { useEffect, useState } from "react";
// import { useState } from "react";

const fcl = require("@onflow/fcl");
const t = require("@onflow/types");

fcl.config()
    .put("flow.network", "local")
    .put("accessNode.api", "http://localhost:8080")
    .put("discovery.wallet", "http://localhost:8701/fcl/authn")

function App() {
  const [user, setUser] = useState({addr: ''});

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, [])

  const logIn = () => {
    fcl.authenticate();
  }

  const logOut = () => {
    fcl.unauthenticate();
  }

  // const getTheGreeting = async () => {
  //   const result = await fcl.send([
  //     fcl.script(getGreeting)
  //   ]).then(fcl.decode);

  //   console.log(result);
  // }

  return (
    <div className="App">
      {user.addr ? user.addr : ""}
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default App;
