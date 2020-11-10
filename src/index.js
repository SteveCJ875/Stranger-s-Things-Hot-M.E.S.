import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/HeaderComponent.js";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import CommentComponent from './components/SignUpForm.js'

import { getToken, clearToken, hitAPI } from "./api";

import Auth from "./components/Auth";

const App = () => {
  // a piece of state that represents the status of the current user
  const [isLoggedIn, setIsLoggedIn, getUserObj] = useState(!!getToken());
  const [postList, setPostList, setUserObj] = useState([]);
  const [wantsToReply, setReply] = useState("") 

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
      {postList.map((post, idx) => {
         
        return (
          
          <div
            className="post"
            key={idx}
            style={{
              border: post.isAuthor ? "5px solid gold" : "1px solid brown",
            }}
          >
            <h5>
              {post.title} ({post.location})
            </h5>
            <p>{post.description}</p>
            <div>
              {wantsToReply === post._id ? <CommentComponent 
                  wantsToReply={wantsToReply}
                  setReply={setReply}
              /> : null}
              </div>
            <div>
              {post.isAuthor ? (
                <Button
                  variant="contained"
                  color="primary"
                  id={post._id}
                  onClick={() => {
                    console.log("hey", post._id);
                    hitAPI("DELETE", `/posts/${ post._id }`)
                    console.log(post._id);

                  }}
                  
                >
                  {" "}
                  DELETE
                </Button>
              ) : (
                <Button
                  variant="contained"
                  style={{ background: "#B1B9B9" }}
                  //wantsToReply=(false)
                  
                  onClick={async (event) => {
                      console.log(post._id)
                    setReply(post._id)
                    console.log(wantsToReply, "wants to reply")
                  }}
                >
                  reply
                </Button>
              

              )}
              {/* <div>
              {wantsToReply ?  <CommentComponent 
                  wantsToReply={wantsToReply}
                  setReply={setReply}
              /> : null}
              </div> */}
              
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
