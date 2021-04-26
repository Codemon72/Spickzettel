### Plain fetch in React
```js
const [courses, setCourses] = useState([]);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('http://localhost:8000/blogs')
    .then(res => { // error coming back from server (e.g. invalid API endpoint)
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
    .catch(err => { // auto catches network / connection error
      setIsPending(false);
      setError(err.message);
    });
}, []);

return (
    <div>
      { error && <div>Error: &nbsp; { error }</div> }
      { isPending && <div>Loading...</div> }
      { courses && (
        courses.map((course) => {
            return (
              <Course
                key = {course.course_id}
                course = {course}
              />
            );
          })
      )}
    </div>
  )
```
___

### Fetch with Async Await in React

```js
const [courses, setCourses] = useState([]);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);


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

return (
    <div>
      { error && <div>Error: &nbsp; { error }</div> }
      { isPending && <div>Loading...</div> }
      { courses && (
        courses.map((course) => {
            return (
              <Course
                key = {course.course_id}
                course = {course}
              />
            );
          })
      )}
    </div>
  )
```
- sources:
  - Net Ninja: 
    - https://www.youtube.com/watch?v=DTBta08fXGU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=19
    - https://github.com/iamshaunjp/Complete-React-Tutorial/blob/lesson-19/dojo-blog/src/Home.js
  - https://www.valentinog.com/blog/await-react/
___

