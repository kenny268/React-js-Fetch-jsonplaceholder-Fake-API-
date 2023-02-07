import useAPI from "../hooks/UseAPi";
import Loading from "./loading";
import PostDetails from "./post";

const  Posts = () => {
 const {data, error,loading } =useAPI('https://jsonplaceholder.typicode.com/posts');
    
    return ( 
        <div>
            {loading &&  <Loading/>}
            
            <div className="container ">
                <div className="row g-3">
                    <p>{error}</p>    
                    {data && data.map(post=>(
                    <PostDetails post={post} key={post.id}/>)
                    )}
                      
                </div>
            </div>
        </div>
     );
}
 
export default Posts;