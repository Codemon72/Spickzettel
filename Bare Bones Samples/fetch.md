### Plain fetch in React
```js
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
      setBlogs(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    });
}, []);
```
___

### Fetch with Async Await in React
```js
const fetchCourseData = async () => {
    try {
      const response = await fetch(URLAllCourseData);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.log(error)
    }
  };

// Fetch Course Data on first Rendering
  useEffect(() => {
    fetchCourseData();
  }, []);
```
___

