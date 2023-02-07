import { useState } from "react";
//import Comments from "./comments";
//import CommentIcon from '@mui/icons-material/Comment';
import Size from "./commentSize";
import { ChatRightFill } from "react-bootstrap-icons";
import ImageAlbum from "./image";
import User from "./User";

const PostDetails = ({post}) => {

    const [comments,SetComments] = useState(null)
    const handleClick= async ()=>{
        try {    
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
            const data = await res.json()
            SetComments(data)            
        } catch (error) {
            console.log(error)
        }
        
    }
    //console.log("Comments ",comments)
    return ( 
        <div className="card" style={{"width":"80%","height":"20%"}} >
            <h5 class="d-flex justify-content-center">
                <span  >
                    <User cardId={post.userId}/>
                </span>
            </h5>
            <div className="card-body d-flex d-flex gap-3" >
                <ImageAlbum cardId={post.id} />
                <div >
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                </div>
            </div>   
            <div id="accordion">
            <div class="card">
            <div className="card-header gap-2" id="headingOne">
            
                {/* <button onClick={handleClick} 
                        className="btn btn-primary" 
                        data-toggle="collapse" 
                        data-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne"
                        >{<Size cardId={post.id}/>}</button>    */}
                        <div className="gap-2 align-self-center">
                <span onClick={handleClick} 
                        
                        className="btn btn-primary d-flex justify-content-around"
                        data-toggle="collapse" 
                        data-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne"
                        style={{"width":"10%"}}
                        ><ChatRightFill style={{"width":"30%"}} size={20}/>{<Size cardId={post.id}/>}</span></div>
            
            </div>

            
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                
                {comments && Object.keys(comments).length>1 && comments.map(comment=>
                    <div className="card card-body" key={comment.id}>
                        <b><small>{comment.email}</small></b>
                        <p>{comment.body}</p>
                    </div>
            )}
                   
            </div>    
            </div>
            </div>
                    
             
            
        </div>
     );
}
 
export default PostDetails;

//{comments && <Comments comments={comments} />} 

// <button onClick={handleClick} 
                    
// type="button" data-bs-toggle="collapse" 
// data-bs-target="#collapseExample" 
// aria-expanded="false" 
// aria-controls="collapseExample" 
// style={{width:"10%"}}></button>