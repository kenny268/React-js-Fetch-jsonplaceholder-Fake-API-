import { useState, useEffect } from 'react';

function useAPI(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((error)=>setError(error))
}, [url]);

  return { data, error};
}
export default useAPI