import { Link } from "react-router-dom";
import useAPI from "../hooks/UseAPi";


const  Posts = () => {
 const {data, error } =useAPI('https://jsonplaceholder.typicode.com/posts');
       

    return ( 

        <div className="container ">


        <div className="row g-3">
            
            <p>{error}</p>
            
            {data && data.map((post)=>


                <div className="card" style={{"width":"18rem"}} key={post.id}>
              
                
                    <div className="card-body" >

                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <Link href="" className="card-link">Comments</Link>
                    </div>
                    
                </div>
                
            
            )}
</div>
        </div>
     );
}
 
export default Posts;