import React, {useState} from 'react'

import { Checkbox, TextField, Button, TextareaAutosize, Container } from '@material-ui/core';
import { hitAPI } from '../api';



const CreatePostComponent = (props) =>{
    const {addNewPost} = props;
    const [title, setTitle] = useState(props.title || "");
    const [description, setDescription] = useState(props.description || "");
    const [price, setPrice] = useState(props.price || "");
    const [location, setLocation] = useState(props.location || "");
    const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
  

return <div>
<Container fixed>
    <form className="post-form"
    onSubmit={async (event) => {
        event.preventDefault();
    
          
          const payload = {
              post: {
                  title,
                  description,
                  price,   
                    willDeliver,

              },
           
          };
          if(location.length > 0){
                  payload.post.location = location;

              }

          try{
          const result = hitAPI('POST', '/posts', payload)
          addNewPost(result.post)
          console.log(result);
          } catch (error){
              console.log(error)
          }
          console.log(payload)
    }}>
        <h3>Create Post Form</h3>
       <TextField
          type="text"
          value={title}
          placeholder="Title here"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
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
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onChange={() => {
                setWillDeliver(!willDeliver)
            }}


        />
<Button type="onSubmit">Post</Button>
    </form>
    </Container>
</div>


}


export default CreatePostComponent;