A JavaScript library for building user interfaces

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
- `useState` - returns an array with the first element being the value, the second a function.
  - integrate like this:
  ```js
  const [currentCount, setCurrentCount] = useState(0);

  const handleclick = () => {
    setCurrentCount(currentCount + 1)
  };
  ```
  - another way to see this: we are basically registering the variable 'currentCount' with React


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
