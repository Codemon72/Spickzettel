A JavaScript library for building user interfaces

- excellent tutorial by Mike Dane: https://www.youtube.com/watch?v=ABQLwlE8MUA
- freeCodeCamp Tutorial: https://www.freecodecamp.org/news/getting-started-with-react-a-modern-project-based-guide-for-beginners-including-hooks-2/

Every browser that loads your HTML & CSS creates a **D**ocument **O**bject **M**odel. 
It is basically a representation of all the HTML as a JavaScript Object.
In JavaScript you can refer to it with 'document':
`console.log(document)`

At the end of the day all that React is doing is manipulationg the DOM. It is just really doing it in a really smart and fast and efficient way. 

Implementing React gives us 2 new global variables to work with: `React` and `ReactDOM`. 
Both of them give us a whole library of methods and objects.

`React` is what you'll work with 99% of the time. It gives us a set of JS functions that makes building UI elements really ease and easily reusable.
- is used to create all the elements (while `ReactDOM` renders them to the DOM)

`ReactDOM` is what allows React to render to the DOM. 
Like this:
In the HTML:
```html
<div id="root"></div>
```
In the attached JavaScript file:
```js
const reactContentRoot = document.getElementById('root');

ReactDOM.render('Potztausend!', reactContentRoot);
```
explained: `ReactDOM` has a function `render()` that takes 2 arguments:
1. what to display
2. where to display it

Context Knowledge: There is also `ReactNative` which could e.g. render it to a mobile device. 

#### JSX and Babel
- JSX = JavaScript Syntax Extension
- conveniently looks like HTML but isn't. 
- not part of JavaScript
- needs a transpiler (e.g. Babel) which will transpile it into React code
  - try it out: https://babeljs.io/repl
- 'syntactic sugar'
JSX is a syntax used to replicate stuff like this: 

```js
// instead of doing this:
const myFirstElement = React.createElement('ul', {}, [
  React.createElement('li', {}, 'item1'),
  React.createElement('li', {}, 'item2'),
  React.createElement('li', {}, 'item3')
]);

// you can go like this: 
const myJSXElement = (
  <ul>
    <li>item1</li>
    <li>item2</li>
  </ul>
)

```

#### Components and Elements
- components are functions that return JSX
- by convention they begin with a capital letter

#### Hooks
Hooks are ways that you can tell React what's going on in your program or that you can respond to things that are happening in the program. 
- **Note**: React wants to updates the DOM only when absolutely **necessary**. It's only gonna do that when we explicitly tell it to. And the way that we can tell it to do that is by using what is called a React Hook.

- `useState` - returns an array with the first element being the value, the second a function. 
  - the first value contains the variable, object or array we want to keep up to date, the second is the function to update it. Whatever we pass into the function is going to be the new value of the useState. 
  - whatever we pass into useState() is going to be the default value.
  - integrate like this:
  ```js
  const [currentCount, setCurrentCount] = useState(0);

  const handleclick = () => {
    setCurrentCount(currentCount + 1)
  };
  ```
  - another way to see this: we are basically registering the variable 'currentCount' with React
  - **Note**: React only updates the DOM when absolutely **necessary**. Changing a variable that gets read out won't register with React. `useState` 

- `useEffect` - allows us to run a function whenever something updates or has finished loading
  - gets 2 parameters: a (callback) function and an array. Both are required, but the array can remain empty.
  - in the array all 
  - if the array has no values, useEffect will run only once.
  ```js
  useEffect(() => {
    console.log("I was mounted and will not run again!");
  }, []);
  ```
- `useContext`- With Context it is possible to pass data through the component tree without having to pass properties down manually at every level. Passing properties to components down in the tree is also known as Prop-Drilling.
Context can be considered “global” for a tree of components. It is primarily used when some data for many components must be accessible at different nesting levels.
To use them, a Context must first be created. It optionally takes an argument that contains the default value of the Context.
`const AContext = React.createContext(‘a value');`

To provide data to the Context the Provider is used. All your components which should have access to the Context needs to be wrapped by the Context.Provider.
```js
<AContext.Provider value={/* some value */}>
    <AComponent />
</AContext.Provider>
```
When React renders a component, which subscribes to this Context object, it will read the current context value from the closest matching Provider above it in the tree.
To subscribe to a Context you can use the useContext Hook from React.
```js
import AContext from './AContext'
// ...
const value = useContext(AContext);
```

#### Conditional Rendering
Consider you want to render something only when certain conditions are met. E.g. you only want to display a list if you have actual data for it or display a logout button only if the user is logged in.
There are differen ways to do it:
- If statement for whole components:
  ```js
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
  }
  ```
- Inline If with Logical Operators
  ```js
  <div className="item__new-price">{product.newPrice >= 0 && product.newPrice}</div>
  ```
  If you want to conditionally display only small JSX elements use the `&&` operator. It works because in JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`.
  Therefore, if the condition is true, the element right after `&&` will appear in the output. If it is false, React will ignore and skip it.
  Better practice in the case above would be to conditionally render the whole element. To do that place the JSX element into parentheses after the `&&`operator:
  ```js
  {product.newPrice >= 0 && (
        <div className="item__new-price">{product.newPrice}</div>
      )}
  ```
  You can chain as many conditions as you like. What you will return is the expression after the last `&&` operator:
  ```js
  {loggedIn && premiumMember && (
    <div className="user">{userName}</div>
  )}
  ```
  You can use other logical operators like `||` etc just as well. Put more complex conditional statements into parenthesis
- Ternary Operator
  Another method for conditionally rendering elements inline is to use the JavaScript conditional operator `condition ? true : false`.
  ```js
  <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
  </div>
  ```

Excellent walkthrough on [youtube](https://www.youtube.com/watch?v=fAUkKh-WfLM)
Docs on [conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

#### Props
Props are values that can be passed into a component to be used for whatever. By default they are empty objects.
- Syntax: 
  ```js
  return (
    <div className="App">
      <Menu />
      <Header />
      <List productsArray={products}/>
    </div>
  );
  ```
  which can be read out like this:
  ```js
  const List = (props) => {
  return (
    <div className="List">
      {props.productsArray.map((product) => {
        return <ListItem key={product.id} product={product} />;
      })}
    </div>
    );
  };
  ```
  or by Array Destructuring:
  ```js
  const List = ({ productsArray }) => {
  return (
    <div className="List">
      {productsArray.map((product) => {
        return <ListItem key={product.id} product={product} />;
      })}
    </div>
    );
  };
  ```


#### Forms and Input fields

- `<input type="text" value="mike" />` - whatever you write into value will be in the input field no matter what. You can't type anymore into it. 
We leverage that by registering that in a variable:
```js
const Form = () => {
  const [changeValue, setChangeValue] = useState('');

  const handleInputChange = (event) => {
    setChangeValue(event.target.value);
  };

  return = (
    ...
    <input 
      type="text" 
      value={changeValue} 
      onChange={handleInputChange} 
    ...
  )
}
```







#### A Couple Of Examples
working through Mike Dane's tutorial: 

```js
const reactContentRoot = document.getElementById('root');

// MOST SIMPLE REACT ELEMENT
// takes the arguments: (html element, props, text/content)
// const myFirstElement = React.createElement('li', {}, 'item1');

// BASIC _IDEA_ OF NESTED ITEMS
// const myFirstElement = React.createElement('ul', {},
//   React.createElement('li', {}, 'item1')
// );

// BASIC _IDEA_ OF AN ARRAY OF NESTED ITEMS
// const myFirstElement = React.createElement('ul', {}, [
//   React.createElement('li', {}, 'item1'),
//   React.createElement('li', {}, 'item2'),
//   React.createElement('li', {}, 'item3')
// ]);

// ReactDOM.render(myFirstElement, reactContentRoot);


// AND THE SAME IN JSX (after also installing a transpiler - in this case Babel)
// const myJSXElement = (
//   <ul>
//     <li>JSX + Babel</li>
//     <li>item1</li>
//     <li>item2</li>
//   </ul>
// )


// INSERTING A VARIABLE:
// const newItem = 'new Item'; 

// const myJSXElement = (
//   <ul>
//     <li>JSX + Babel</li>
//     <li>item1</li>
//     <li>item2</li>
//     <li>{newItem}</li>
//     {/* and now we can do function on them */}
//     <li>{newItem.toUpperCase()} (turned to uppercase)</li>
//   </ul>
// )

// ReactDOM.render(myJSXElement, reactContentRoot);

// NOW AS A PROPER COMPONENT:
const App = () => {
  const newItem = 'new Item'; 

  return (
  <ul>
    <li>JSX + Babel</li>
    <li>item1</li>
    <li>item2</li>
    <li>{newItem}</li>
    <li>{newItem.toUpperCase()}</li>
  </ul>
  )
}

// we insert 'App' as a tag (with '< />') but it is basically just another way of calling the function - it also works by normally calling it:
// ReactDOM.render(App(), reactContentRoot);

ReactDOM.render(<App />, reactContentRoot);

```

#### Installation


- by creating an instant with `create-react-app example-folder` you autmatically get
  - a repository named example-folder
  - a Node application
  - git initialized
  - JSX
  - transpiler for JSX