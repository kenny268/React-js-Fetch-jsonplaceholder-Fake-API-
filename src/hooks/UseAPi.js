import { useState, useEffect } from 'react';

function useAPI(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(data)
      setLoading(false)
    })
    .catch(error => {
      setError(error)
    });

}, [url]);

  return { data, error,loading};
}
export default useAPI