useEffect(() => {
  fetch('http://localhost:8000/blogs')
    .then(res => {
      // check if API endpoint ok
      if (!res.ok) {
        throw Error('could not fetch data from that endpoint');
      }
      return res.json();
    })
    .then((data) => {
      // setBlogs(data);
      // setIsPending(false);
      // setError(null);
    })
    .catch(err => {
      // setIsPending(false);
      // setError(err.message);
    });