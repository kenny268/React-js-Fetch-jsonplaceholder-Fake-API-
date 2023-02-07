import useAPI from "../hooks/UseAPi";
const Size = ({cardId}) => {

    

    const {data,error } =useAPI(`https://jsonplaceholder.typicode.com/posts/${cardId}/comments`);

    //console.log(data)
    return (

       <div>
        {error && <div>?</div>}

        { data && <div className="size">
           <p>  {(data.length)}</p>
        </div>}
       </div>

      );
}
 
export default Size;
