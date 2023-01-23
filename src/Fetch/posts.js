import useAPI from "../hooks/UseAPi";


const  Posts = () => {
 const {data, error } =useAPI('https://jsonplaceholder.typicode.com/posts');
       

    return ( 

        <div className="wrapper">
            
            <p>{error}</p>
            
            {data && data.map((post)=>
              
                <div className="card" key={post.it}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            
            )}

        </div>
     );
}
 
export default Posts;