import useAPI from "../hooks/UseAPi";
const ImageAlbum = ({cardId}) => {
    const {data,error } =useAPI(`https://jsonplaceholder.typicode.com/photos/${cardId}`);

 
    return (
        <div className="Image">
            {error && <div>?</div>}
            { data && <div className="size" style={{'backgroundColor':'$gray-400'}}>
            <img src={data.thumbnailUrl} alt="" className="rounded-circle"/>
        </div>}

        </div>
    );
}
 
export default ImageAlbum;