import React from 'react';
import ReactDOM from 'react-dom';


const SignUpForm = () => {

    return <><h1>This is sign up form</h1>
    <form onSubmit={{ function (event){
        event.preventDefault();
    }
        
    }}>
     <label>emails </label>
     <input type="text" placeholder="email" />
        <br></br>
     <input type="text" placeholder="username" />
     <br></br>
     <input type="text" placeholder="username" />
     <br></br>
    <input type="text" placeholder="username" />
    <br></br>
    <input type="text" placeholder="password" />
    <br></br>
    <button >click me</button>

    </form>
    </>
}

export default SignUpForm