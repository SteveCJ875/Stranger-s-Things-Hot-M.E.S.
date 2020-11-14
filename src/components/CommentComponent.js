import React, { useState } from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {hitAPI} from "../api";

const CommentComponent = (props) => {
  const [content, setContent] = useState("");
  const { wantsToReply, setReply} = props;
 console.log("wants to repl", wantsToReply)
  const {posts}= props;

console.log(props)
  const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(props.wantsToReply, "this comes from props to comment component")
      //console.log(posts._id, "person wants to reply")
      console.log(props)
      const payload ={
         message: {
               content,
         }
      }
       await hitAPI("POST", `/posts/${wantsToReply}/messages`, payload)
       
      setReply("")
      //console.log(wantsToReply, "person wants to reply2")
  }

  return (
    <div>
      <form
        onSubmit={
          handleSubmit
        }
      >
        <TextField
          type="text"
          
          value={content}
          placeholder="comment here"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </form>
      <Button type="submit" onClick={handleSubmit}
      >Send</Button>
    </div>
  );
};

export default CommentComponent;
