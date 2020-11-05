import React from 'react';
import ReactDOM from 'react-dom';


const LoginForm = () => {
    

    return <><h1>This is login in form</h1>
    <form onSubmit={{ function (event){
        event.preventDefault();
    }
        
    }}>
    <input type="text" placeholder="username" />
    <input type="text" placeholder="password" />
    <button >click me</button>

    </form>
    </>
}

export default LoginForm