import useAPI from "../hooks/UseAPi";
const Comments = ({id}) => {

    
    const {data, error } =useAPI(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    console.log(error)

    return (  
        <div>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >comments</button>
        <div className="collapse" id="collapseExample">
            {data && data.map((comment)=>
                <div className="card card-body" key={comment.id}>
                    <b><small>{comment.email}</small></b>
                    <p>{comment.body}</p>
                </div>)}
        </div>
    </div>

    );
}
 
export default Comments;