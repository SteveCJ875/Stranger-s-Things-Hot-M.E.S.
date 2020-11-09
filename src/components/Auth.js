import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles'
//import TextField from '@material-ui/core/TextField'

import { auth } from "../api";
import { TextField } from "@material-ui/core";

const Auth = (props) => {
  const { setIsLoggedIn } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Register or Log In</h3>
      {errorMessage ? <h5 className="error">{errorMessage}</h5> : null}
      <TextField
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="username"
      />
      <TextField
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      <Button 
      variant="contained"
      color="primary"
        onClick={async (event) => {
          try {
            const result = await auth(username, password, true);
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        Register
      </Button>
      <Button
        onClick={async (event) => {
          try {
            const result = await auth(username, password);
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        Log In
      </Button>
    </form>
  );
};

export default Auth;