A JavaScript library for building user interfaces

Every browser that loads your HTML & CSS creates a **D**ocument **O**bject **M**odel. 
It is basically a representation of all the HTML as a JavaScript Object.
In JavaScript you can refer to it with 'document':
`console.log(document)`

At the end of the day all that React is doing is manipulationg the DOM. It is just really doing it in a really smart and fast and efficient way. 

Implementing React gives us 2 new global variables to work with: `React` and `ReactDOM`. 
Both of them give us a whole library of methods and objects.

`React` is what you'll work with 99% of the time. It gives us a set of JS functions that makes building UI elements really ease and easily reusable.

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

