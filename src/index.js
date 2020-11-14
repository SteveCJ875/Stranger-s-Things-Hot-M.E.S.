import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/HeaderComponent.js";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import CommentComponent from './components/CommentComponent.js'
import CreatePostComponent from "./components/CreatePostComponent"
import PostList from "./components/PostList"
import {Checkbox} from "@material-ui/core"


import { getToken, clearToken, hitAPI } from "./api";

import Auth from "./components/Auth";

const App = () => {
  // a piece of state that represents the status of the current user
  const [isLoggedIn, setIsLoggedIn, getUserObj] = useState(!!getToken());
  const [postList, setPostList, setUserObj] = useState([]);
  const [wantsToReply, setReply] = useState("");
  const [searchTerm, setSearchTerm] = useState("")
  const [isRecent, setIsRecent] = useState(false)


  function addNewPost (newPost) {
      setPostList([newPost, ...postList]);
  }
  function filteredPosts (){
      return postList.filter((post) => {
          return post.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
  }

  useEffect(() => {
    hitAPI("GET", "/posts")
      .then((data) => {
        console.log("first data", data)
        //console.log("messages", data.messages)
        const { posts } = data;
        //console.log(post.messages)
        setPostList(posts);
      })
      .catch(console.error);
    
  }, [isLoggedIn]);

  return (
    <div className="app">
      <HeaderComponent />
      <div>
          <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search Here" />

       
         


           <label>Rcent Post Only
           <Checkbox
            checked={isRecent}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onChange={() => {
                setIsRecent(!isRecent)
            }} />

          </label>
      </div>
      
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
        <PostList 
        postList={filteredPosts()}
        setPostList={setPostList} />
      
       <CreatePostComponent addNewPost={addNewPost}/> 

       {/* <MessageComponent setMessage={setMessage}/> */}
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

/**
 * hitAPI('DELETE', `/posts/${ post._id }`)
 */
