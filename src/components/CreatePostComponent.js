import React, { useEffect, useState } from "react";
import  "./PostForm.css"
import {
  Checkbox,
  TextField,
  Button,
  TextareaAutosize,
  Container,
} from "@material-ui/core";
import { hitAPI } from "../api";

const CreatePostComponent = (props) => {
  const { addNewPost, _id, setEditablePost, updatePost} = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  
  
  useEffect(() => {
    setTitle(props.title || "");
    setDescription(props.description || "");
    setPrice(props.price || "");
    setLocation(props.location || "");
    setWillDeliver(props.willDeliver || false);
  }, [_id]);

  function clearForm() {
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setWillDeliver(false);
  }
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div style={{
        "paddingBottom" : "2000px",
        bottom: "500px"
        
        
    }}>
    
        <form
          className="post-form"
          style={{
       // alignSelf: "flex-start",
        // display: "grid",
         gridTemplateColumns: "repeat2 1fr",
        maxWidth: "200px",
        gap: "8px",
        bottom: "500px"
      }}
          onSubmit={async (event) => {
            event.preventDefault();


        if (title.length === 0) {
          setIsDirty(true);
          return;
        }

            const payload = {
              post: {
                title,
                description,
                price,
                willDeliver,
              },
            };
            if (location.length > 0) {
              payload.post.location = location;
            }

            try {
            if (_id) {
            const result = await hitAPI("PATCH", `/posts/${_id}`, payload);
            updatePost(result.post);
            setEditablePost({});
          } else {
            const result = await hitAPI("POST", "/posts", payload);
            addNewPost(result.post);
            clearForm();
          }
          }catch (error) {
              console.log(error);
            }
          }}
        >
          {_id ? <h3>Update Your Post</h3> : <h3>Create Post</h3>}
          <TextField
            type="text"
            value={title}
            placeholder="Title here"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          {isDirty && title.length === 0 ? (
        <h3 style={{ color: "red" }}>You need a title</h3>
      ) : null}

          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Minimum 3 rows"
            type="text"
            value={description}
            placeholder="Description here"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <TextField
            type="text"
            value={price}
            placeholder="Price here"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            type="text"
            value={location}
            placeholder="location here"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />

          <Checkbox
            checked={willDeliver}
            inputProps={{ "aria-label": "primary checkbox" }}
            onChange={() => {
              setWillDeliver(!willDeliver);
            }}
          />
          <Button type="onSubmit">Post</Button>
        </form>
     
    </div>
  );
};

export default CreatePostComponent;
