import useAPI from "../hooks/UseAPi";
const Comments = () => {

    
    const {data, error } =useAPI('https://jsonplaceholder.typicode.com/comments');

    console.log(error)

    return (  
 <div>

    {data && data.map((comment)=>

            <div className="wrapper" key={comment.id}>
                <p><b>{comment.name}</b></p>
                <b><small>{comment.email}</small></b>
                <p>{comment.body}</p>
            </div>
        )
    }

 </div>

    );
}
 
export default Comments;