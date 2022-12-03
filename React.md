A JavaScript library / framework for building user interfaces

### Tutorials and Documentation
- Modern React Documentation (still in beta): https://beta.reactjs.org/
- Crash Course 2021 by Brad Traversy: https://www.youtube.com/watch?v=w7ejDZ8SWv8
- excellent tutorial by Mike Dane: https://www.youtube.com/watch?v=ABQLwlE8MUA
- freeCodeCamp Tutorial: https://www.freecodecamp.org/news/getting-started-with-react-a-modern-project-based-guide-for-beginners-including-hooks-2/
- Docs create-react-app: https://create-react-app.dev/docs/getting-started
- Docs react: https://reactjs.org/docs/getting-started.html



### Basics
Every browser that loads your HTML & CSS creates a **D**ocument **O**bject **M**odel. 
It is basically a representation of all the HTML as a JavaScript Object.
In JavaScript you can refer to it with 'document':
`console.log(document)`

At the end of the day all that React is doing is manipulationg the DOM. It is just doing it in a really smart, fast and efficient way. 

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
___

### Deployment
- Docs for Deploy: https://create-react-app.dev/docs/deployment/
Recommended (2022): 
1. Netlify
2. vercel, aws, microsoft azure, ...

If your app has more than one page / route (to index.html) you might need an extra file (called a 'front router'?) (.htcaccess for apache server).
This is because when there is a fresh page load for a /todos/42, the server looks for the file build/todos/42 and does not find it. The server needs to be configured to respond to a request to /todos/42 by serving index.html.
Docs: https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
___


### Working With State
- components can have 'state' which is an object that determines how a component renders and behaves
- "App" or "global" state refers to state that is available to the entire UI, not just a single component.
- Prior to React 16.8 we had to use class based components to use state. 
Now we can use functional components with hooks.
___


### JSX and Babel
- JSX = JavaScript Syntax Extension
- conveniently looks like HTML but isn't. 
- not part of JavaScript
- needs a transpiler (e.g. Babel) which will transpile it into React code
  - try it out: https://babeljs.io/repl
  - transpiler is included when using `create-react-app`
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
#### JSX ain't HTML
remember:
- `className` instead of `class` attribute
- `htmlFor` instead of `for` attribute
- `style={{ color: 'red', backgroundColor: 'black' }}` for inline styling

#### Tipps
- recommended VSC extension: ES7 React/Redux/GraphQL/React-Native snippets
  - gives the shortcut `rafce` for arrow function component that exports
___


## Components and Elements
- components are functions that return JSX
- by convention they begin with a capital letter and use camel case (= PascalCase)
___


### Hooks
Hooks are ways that you can tell React what's going on in your program or that you can respond to things that are happening in the program. 
- **Note**: React wants to updates the DOM only when absolutely **necessary**. It's only gonna do that when we explicitly tell it to. And the way that we can tell it to do that is by using what is called a React Hook.

### useState
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

#### useEffect
- `useEffect` - allows us to run a function whenever something updates or has finished loading
  - gets 2 parameters: a (callback) function and an array. Both are required, but the array can remain empty.
  - in the array all 
  - if the array has no values, useEffect will run only once.
  ```js
  useEffect(() => {
    console.log("I was mounted and will not run again!");
  }, []);
  ```

#### useContext
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
- custom hook - you can create your custom hook to dry out your code
  - create a component and name it 'use' + 'Something' (e.g.: useForm). This is necessary for it to work
  - put in all the logic you want, export, import and Bob's your uncle.

```js
import { useState } from 'react';

const useForm = (callback) => {

  const initialFormState = {
    email: '',
    password: ''
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };   

  const handleSubmit = event => {
    event.preventDefault();
    callback();
  }

  return {
    formState,
    handleInputChange,
    handleSubmit
  }
}

export default useForm;
```
___


#### Conditional Rendering
```js
function Greeter({myBooleanCondition, myProperty}) {
  return (
    <>
      {/* Logical AND: Render something ONLY when another variable is truthy */}
      {myBooleanCondition && <h1>Hello</h1>}

      {/* Logical OR: Render something ONLY when it is truthy OTHERWISE use a fallback value */}
      {myProperty || "Fallback value"}

      {/* Ternary Operator: Render A or B, depending on a condition (like if/else) */}
      {myBooleanCondition ? <h2>If true, this headline will appear</h2>:<p>If false, this paragraph will render</p>}
    </>
  );
}
```
-render something only when certain conditions are met. 
  - E.g. you only want to display a list if you have actual data for it or display a logout button only if the user is logged in.
  
There are different ways to do it:
- If statement for whole components:
  ```js
  render() {
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
  ```
- Inline `if` with Logical Operators
  ```js
  <div className="item__new-price">
    {product.newPrice >= 0 && product.newPrice}
  </div>
  ```
  If you want to conditionally display only small JSX elements use the `&&` operator. It works because in JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`.
  Therefore, if the condition is true, the element right after `&&` will appear in the output. If it is false, React will ignore and skip it.
  Better practice in the case above would be to conditionally render the whole element. To do that place the JSX element into parentheses after the `&&`operator:
  ```js
  {product.newPrice >= 0 && (
        <div className="item__new-price">
          {product.newPrice}
        </div>
      )}
  ```
  You can chain as many conditions as you like. What you will return is the expression after the last `&&` operator:
  ```js
  {loggedIn && premiumMember && (
    <span className="user">{userName}</span>
  )}
  ```
  You can use other logical operators like `||` etc just as well. Put more complex conditional statements into parenthesis

- Ternary Operator
  Another method for conditionally rendering elements inline is to use the JavaScript conditional operator `condition ? true : false`.
  ```js
  <div>
      {isLoggedIn
        ? <LogoutButton onClick={handleLogoutClick} />
        : <LoginButton onClick={handleLoginClick} />
      }
  </div>
  ```
  If condition is true the expression after `?` gets rendered, if it is falls the expression after `:` is rendered.

- Conditional Attributes inside JSX elements
  ```js
  <button 
     className={`menu__btn ${atHomePage ?  'active' : ''}`}
     className={`${errors.email && "inputError"}`}
     onClick={priceValid ? handleApplyClick : undefined }
     >Home</button>
  ```
  also:

  ```jsx
  let formIsValid = !Object.values(formState).includes('') && !dateError; // returns boolean

  <input type="submit" disabled={!formIsValid} >submit</input>
  ```
  ternary operator can have deeper levels:
  ```js
  {product.newPrice >= 0 && product.selected 
    ? (<div className="item__new-price">{product.newPrice} €</div>) 
    : product.newPrice >= 0 
      ? (<div className="item__active-price">{product.price} €</div>)
      : ''}
  ```

Excellent walkthrough on [youtube](https://www.youtube.com/watch?v=fAUkKh-WfLM)
Docs on [conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
___


### Avoid Unnecessary Re-Rendering
- every time the state of a component changes, React _schedules_ a render of that component. (This doesn't happen immediately, React will try to find the best moment for this.)
- when a component renders all it's children will also re-render, regardless of whether their props have changed or not.
- options to avoid unnecessary re-rendering are to use `memo()` or `createContext`/ `useContext`.
  - Example `memo()`: https://codesandbox.io/s/memo-for-child-of-context-provider-8rx8m
  - Example Context: https://codesandbox.io/s/context-provider-prevents-unnecessary-rerendering-mop5d
___


### Props
Props are values that can be passed into a component. By default they are empty objects.
Parent Component: 
```js
return (
  <div className="App">
    <List productsArray={products}/>
  </div>
);
```
Child Component:
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

or by Object Destructuring:
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
using this syntax also allows to set default values for each prop individually, in case they are not passed in:
```js
function Greeter({name, location = "Hamburg"}) {
  return (
    <h1>Hello, {name} from {location}!</h1>
  );
}
```
___


### Forms and Input fields
HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.
good source: https://reactjs.org/docs/forms.html

#### input field, single
`<input type="text" value="mike" />` - whatever you write into value will be in the input field no matter what. You can't type anymore into it. 
We leverage that by registering that in a variable:
```js
const Form = () => {
  const [changeValue, setChangeValue] = useState('');

  const handleInputChange = (event) => {
    setChangeValue(event.target.value);
  };

 return = (
   // ...
     <input 
       type="text" 
       value={changeValue} 
       onChange={handleInputChange} 
     // ...
     />
  )
}
```
#### select - option
might seem complex on first glance, but is quite simple
- instead of choosing an option with the `selected` attribute, the select element gets a value that will determine the presented option on first loading
- capture the selected option in a `useState` 
- give the select element a function that gets triggered`onChange`.
- handle all that you fancy in that function
```js
const [selected, setSelected] = useState("coconuts");

const handleSelectorChange = (event) => {
  setSelected(event.target.value);
  setChangeValue('')
  // other stuff ...
};            

<select 
  id="selector" 
  value={selected} 
  onChange={handleSelectorChange}>
    <option value="bananas">🍌 🐒</option>
    <option value="coconuts">🥥 🌴</option>
</select>
```

#### Handling multiple input fields
You can handle multiple input fields in a single state. This example uses the `name` attribute of the input fields.

```js
const [formState, setFormState] = useState({
    start_date: '',
    end_date: ''
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      [event.target.name]: value
    });
  };       

  const handleAddCourse = (e) => {
    e.preventDefault()
    setFormState({
      start_date: '',
      end_date: ''
    })
    // ...
  }

  return (
    //...

    <form onSubmit={handleAddCourse}>

    <div>
      <label htmlFor="start_date">Start Date</label>
      <input 
        type="date"
        name="start_date"
        value={formState.start_date}
        onChange={handleInputChange}
        />
    </div>
    <div>
      <label htmlFor="end_date">End Date</label>
      <input 
        type="date"
        name="end_date"
        value={formState.end_date}
        onChange={handleInputChange}
        />
    </div>
      
    <input type="submit" />

  </form>
)
```
sources:
- https://reactjs.org/docs/forms.html#handling-multiple-inputs
- https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
___


### Images in React

#### Where to put them?
Adding images in the public folder and the src folder both are acceptable methods, however, importing images into your component has the benefit that your assets will be handled by the build system, and will receive hashes which improves caching/performance. You'll also have the added benefit that it will throw an error if the file is moved/renamed/deleted.

#### How to reference them?
- Option 1: import the image into the component
  Put the image file somewhere under the src folder. This alone will not automatically make it available, so you have to import the image into the React component where you’re using it.

  `import companyLogo from './path/to/logo.jpg';`
  Then you can reference it by that variable name. 
  Wherever you want to display the image, render your img tag and pass that variable as the src:
  ```jsx
  <div>
    <img src={companyLogo} alt="BigCo Inc. logo"/>
  </div>
  ```
  (Note: use src={companyLogo} and not src="companyLogo"! If you use the quoted string "companyLogo" it will try to fetch a file at /companyLogo and that will fail. Make sure to use curly braces if you’re using an imported image. Curly braces are the way to pass JS variables as props.)

- Option 2: Put the image in the public directory
  You can put the image file in the public folder (or if this is not Create React App… then any folder that will be copied to the server).
  Then, assuming your server is treating the public folder as the “root” directory (/), then your images will be available relative to that – just like with plain HTML.
  So if you had an image at public/images/thing.jpg, you could display that image this way:
  ```jsx
  <div>
    <img src="images/logo.jpg" alt="BigCo Inc. logo"/>
  </div>
  ```
  Because this method makes the image available as a regular file on the web server, and you can test it by opening http://localhost:3000/images/logo.jpg in the browser (or, you know, your actual domain name, once it’s deployed!)

#### How Imported Images Work in React
First, know that imports are not handled by React at all – they’re handled by your bundler, which is probably Webpack. (if you’re using Create React App, it is definitely Webpack)

Webpack, Rollup, Parcel, and other bundlers all work conceptually the same way: when you import a static file, like an image or a CSS file, the bundler doesn’t literally paste that file in at the import location. Instead, it makes a note that this particular JS file depends on this particular image/CSS file/whatever.

Then the bundler will copy the image to the output directory with a generated unique name (like a5c8d3f89cad.jpg) and, behind the scenes, it will replace <img src={yourName}/> with <img src="a5c8d3f89cad.jpg"/>.

If the image is especially small, Webpack might even decide to inline it into the JS bundle, as an optimization.

source: https://daveceddia.com/react-image-tag/
___


### Event Handlers

You can attach event handlers just like you do in regular HTML (but the event names are camelCased):

```js
const toggleIsChecked = (event) => {
  console.log(event.target.checked)
}

const logProductId = (id) => {
  console.log('product-id: ' + id)
}

// the event is passed along by default
onChange={toggleIsChecked}
// to pass a value from the element:
onClick={() => logProductId(product.id)}

onDoubleClick={fancyFunction}
```
```js
{/* You can pass a reference to a function that you defined somewhere else */}
<MyComponent onClick={onClickHandler} />
{/* You can also define an arrow function right here */}
<MyComponent onClick={() => {console.log("I was clicked!")}} />
```

## Examples 
... that might come in handy again

### Styling navigation buttons:
```js
  import { Link, useLocation } from "react-router-dom";

  const Menu = () => {
    const location = useLocation();

    const atHomePage = location.pathname === '/';

    return (
      <div className="Menu">
        <div className="brand">Bulk Product Manager</div>
        <Link 
          to="/" 
          className="menu-link"
          >
          <button 
            className={`menu__btn ${atHomePage ?  'active' : ''}`} 
            >Home</button>
        </Link>
        <Link 
          to="/prices" 
          >
          <button 
            className={`menu__btn ${atPricesPage ?  'active' : ''}`} >Prices</button>
        </Link>
    ...
  ```

___
#### Installation

- install react and create an instance locally with `npx create-react-app example-repo`. You autmatically get
  - a repository named example-repo
  - a Node application
  - git initialized
  - JSX
  - transpiler for JSX

**Note**: `npx create-react-app example-repo` for everyone who has not or doesn't want to install React globally

___
#### Packages I Have Used And Loved
... or that someone more experienced recommended to me:
- `react-router-dom` - (import { BrowserRouter as Router, Route, useLocation)
- `@iconify/react` and
- `@iconify/icons-mdi` - material design icons
  - [Iconify for React](https://www.npmjs.com/package/@iconify/react) - all available icons at: https://iconify.design/icon-sets/
- `google-map-react`
- `styled-components` - (recommended by Jonas Reitmann)
- React Query (for HTTP calls) - (recommended by Jonas Reitmann)
- `react-spring` - for animations (Traversy: https://www.youtube.com/watch?v=S8yn3-WpVV8)
- `react-server` - Get a full fake REST API with zero coding https://www.npmjs.com/package/json-server (The Net Ninja: https://www.youtube.com/watch?v=eao7ABGFUXs&t=121s)
