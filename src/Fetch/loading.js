import { MDBSpinner } from 'mdb-react-ui-kit'
const Loading = () => {
    return ( 
        <div className="containerSpinner">

            <div>
                <MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner> 
            </div>
            
      </div>
    
     );
}
 
export default Loading;
