import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from "./components/loginForm"
import SignUpForm from "./components/SignUpForm"


const App = () => {

    return <div>
    <h1> hello</h1>
         <LoginForm/>
         <SignUpForm />

    </div>


}













ReactDOM.render(
    <App />,
    document.getElementById('app')
  );