import React, { useState } from "react";
import { Button } from "@material-ui/core";
import CommentComponent from "./CommentComponent";
import { hitAPI } from "../api";
import MessageComponent from "./MessagesComponent";

const PostList = (props) => {
  const [wantsToReply, setReply] = useState("");
  const { postList, setPostList } = props;
 //const {set} = props;

  return (
    <div  className="post-list"
    style={{
      display: "grid",
      gap: "8px",
      gridColumn: 1,
      gridRow: 2,
      overflowY: "scroll",
        padding: "8px",
   
    }}>
      <h3> Posts Are Here!</h3>
      {postList.map((post, idx) => {
        return (
          <div
            className="post"
            key={idx}
            style={{
              border: post.isAuthor ? "5px solid gold" : "1px solid brown",
              overflow: "scroll",
            }}
          >
            <h5>
              {post.title} ({post.location}) [{post.createdAt}]
            </h5>
            <p>{post.description}</p>
            <div>
              {wantsToReply === post._id ? (
                <CommentComponent
                  wantsToReply={wantsToReply}
                  setReply={setReply}
                />
              ) : null}
            </div>
            <div>
              {post.isAuthor ? (
                  <div> 
                  <Button
                  variant="contained"
                  color="primary"
                  id={post._id}
                  onClick={async () => {
                    console.log("hey", post._id);

                     await hitAPI("DELETE", `/posts/${post._id}`)
                   
                        setPostList([...postList]);
                      
                  }}
                >
                  {" "}
                  DELETE
                </Button>
                  <Button onClick={() => {
                      setEditablePost(post)
                  }}> Edit</Button>
                  
                  
                  
                  </div>
                
                
              ) : (
                <Button
                  variant="contained"
                  style={{ background: "#B1B9B9" }}
                  onClick={async (event) => {
                    console.log(post._id);
                    setReply(post._id);
                    //console.log(wantsToReply, "wants to reply")
                  }}
                >
                  reply
                </Button>
              )}
              <MessageComponent messageList={post.messages} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
