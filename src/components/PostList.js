import { PostAddOutlined } from "@material-ui/icons";
import React, {useState} from "react";
import {Button} from "@material-ui/core"
import CommentComponent from "./SignUpForm"

const PostList = (props) => {
    const [wantsToReply, setReply] = useState("") 
    const {postList} = props;

    return <div className="post-list">

    <h3> Posts Are Here!</h3>
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
                   onClick={ async () => {
                     //console.log("hey", post._id);
                     console.log( `this id  ${post._id} "has been deleted`)
                    
                  await hitAPI("DELETE", `/posts/${ post._id }`)
                 //setIsLoggedIn(true)
                  const pData = await hitAPI("GET", "/posts")
                  .then((data) => {
                 console.log("yooooooo", data)
                 setPostList(data.posts);
                  })
                
                     }
                   } 
                   
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
         
             </div>
         
           </div>
         );
         
       }
       
       )}




    </div>


}

export default PostList