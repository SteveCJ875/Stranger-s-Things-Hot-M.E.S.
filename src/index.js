import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from './components/HeaderComponent.js';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'

import { getToken, clearToken, hitAPI } from "./api";

import Auth from "./components/Auth";

const App = () => {
  // a piece of state that represents the status of the current user
  const [isLoggedIn, setIsLoggedIn, getUserObj ] = useState(!!getToken());
  const [postList, setPostList, setUserObj] = useState([]);

  useEffect(() => {
    hitAPI("GET", "/posts")
      .then((data) => {
          //console.log("first data", data)
        const { posts } = data;
        setPostList(posts);
      })
      .catch(console.error);

  }, [isLoggedIn] );

  return (
    <div className="app">
   <HeaderComponent />
    
      {isLoggedIn ? (
        <>
           
          <h1>Thanks for logging in!</h1>
          <button
            onClick={() => {
              clearToken();
              setIsLoggedIn(false);
            }}
          >
            LOG OUT
          </button>
        </>
      ) : (
        <Auth setIsLoggedIn={setIsLoggedIn} />
        
      )}
      {postList.map((post, idx) => {
        return (
            
          <div
            className="post"
            key={idx}
            style={{
              border: post.isAuthor ? "5px solid gold" : "1px solid brown",
            } }
          >
            <h5>
              {post.title} ({post.location})
            </h5>
            <p>{post.description}</p>
            <div>
                {post.isAuthor ? <Button 
                
                variant="contained" 
                color="primary"
                onClick={() => {
                    console.log("hey", post._id)
                    //hitAPI("DELETE", `/posts/${ post._id }`)
                    console.log(post._id);
                }} id={post._id} > DELETE</Button>: 
                <Button 
                variant="contained" 
                style={{background: "#B1B9B9"}}
                onClick={async (event) => { 
                    console.log("reply button")}}>reply</Button>}
            </div>
          </div>
          
        );
      })}
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));


/**
 * hitAPI('DELETE', `/posts/${ post._id }`)
 */