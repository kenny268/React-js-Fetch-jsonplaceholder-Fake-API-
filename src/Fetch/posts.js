import useAPI from "../hooks/UseAPi";
import Comments from "./comments";
import Loading from "./loading";


const  Posts = () => {
 const {data, error,loading } =useAPI('https://jsonplaceholder.typicode.com/posts');
 
 
       

    return ( 
        <div>
            {loading &&  <Loading/>}
            
        <div className="container ">
        <div className="row g-3">
            <p>{error}</p>
            
            {data && data.map((post)=>


                <div className="card" style={{"width":"18rem"}} key={post.id}>
              
                
                    <div className="card-body" >

                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        
                         
                         <Comments id ={post.id}/>
                        
                        
                    </div>
                    
                </div>
                
            
            )}
        </div>
        </div>
        </div>
     );
}
 
export default Posts;