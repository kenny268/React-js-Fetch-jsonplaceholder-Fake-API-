import { useState,useEffect } from "react";

const  FetchApi = () => {

const [data, setData] = useState([]);
const [errors,setErrors]= useState(false);


useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>res.json())
  .then((data)=>setData(data))
  .catch((err)=>setErrors)
  
  
}, []);
      
console.log(errors)
    return ( 

        <div className="wrapper">
            
            
            {data.length >0 && data.map((post)=>
              
                <div className="card" key={post.it}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            
            )}

        </div>
     );
}
 
export default FetchApi;