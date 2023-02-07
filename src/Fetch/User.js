import useAPI from "../hooks/UseAPi";
const User = ({cardId}) => {
    const {data,error } =useAPI(`https://jsonplaceholder.typicode.com/users/${cardId}`);
    return (
        <div>
        <div className="Image">
            {error && <div>?</div>}
            { data && <div className="size" style={{'backgroundColor':'$gray-400'}}>
            <p><b>{data.username}</b>  <b>   </b>{data.email}</p>
        </div>}

        </div>
        </div>
    );
}
 
export default User;