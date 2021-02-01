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

// AND AS A PROPER COMPONENT:


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














// const incrementBtn = document.getElementById('increment-button');
// const countDisplay = document.getElementById('count-display');

// let currentCount = 0;

// incrementBtn.addEventListener('click', () => {
//   currentCount+=1;
//   countDisplay.innerText = currentCount;
// });
