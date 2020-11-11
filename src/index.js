import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/HeaderComponent.js";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import CommentComponent from './components/SignUpForm.js'
import CreatePostComponent from "./components/CreatePostComponent"
import PostList from "./components/PostList"

import { getToken, clearToken, hitAPI } from "./api";

import Auth from "./components/Auth";

const App = () => {
  // a piece of state that represents the status of the current user
  const [isLoggedIn, setIsLoggedIn, getUserObj] = useState(!!getToken());
  const [postList, setPostList, setUserObj] = useState([]);
  const [wantsToReply, setReply] = useState("") 

  function addNewPost (newPost) {
      setPostList([newPost, ...postList]);
  }

  useEffect(() => {
    hitAPI("GET", "/posts")
      .then((data) => {
        console.log("first data", data)
        const { posts } = data;
        setPostList(posts);
      })
      .catch(console.error);
  }, [isLoggedIn]);

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
        <PostList postList={postList} />
      
       <CreatePostComponent addNewPost={addNewPost}/> 
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

/**
 * hitAPI('DELETE', `/posts/${ post._id }`)
 */
