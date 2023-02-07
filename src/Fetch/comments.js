const Comments = ({comments}) => {
    
    const obj = Object.assign({}, comments)
    console.log("Here is comments",obj)

    return (  
        <div className="collapse" id="collapseExample">
            {Object.keys(comments).length>1 && Object.keys(comments).map((comment)=>
                <div className="card card-body" key={comment.id}>
                    <b><small>{comment.email}</small></b>
                    <p>{comment.body}</p>
                </div>
            )}
        </div>);}
export default Comments;


                // setCards(prevCards => {
                //     const updatedCards = [...prevCards];
                //     const cardIndex = updatedCards.findIndex(card => card.id === cardId);
                //     updatedCards[cardIndex] = {...updatedCards[cardIndex], body: data};
                //     return updatedCards;
                //   });
                //