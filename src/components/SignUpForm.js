import React, { useState } from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CommentComponent = (props) => {
  const [content, setContent] = useState("");
  const { wantsToReply, setReply } = props;
console.log(props)
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(wantsToReply, "person wants to reply")
      setReply("")
      console.log(wantsToReply, "person wants to reply2")
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
