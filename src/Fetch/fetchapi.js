import { useState,useEffect } from "react";

const  FetchApi = () => {

const [data, setData] = useState([]);


useEffect(() => {
  const getData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
   

    try {
      const resp = await fetch (url);
      const data = await resp.json();
      // Do anything you need to do to
      // data before this call:
      setData(data);
    } catch (err) {
      
    } finally {
    }
  }

 
}, []);
      
      
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