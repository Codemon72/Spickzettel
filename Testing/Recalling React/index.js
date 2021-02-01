const reactContentRoot = document.getElementById('root');

// MOST SIMPLE REACT ELEMENT
// takes the arguments: html element, props, text/content
// const myFirstElement = React.createElement('li', {}, 'item1');

// BASIC IDEA OF NESTED ITEMS
// const myFirstElement = React.createElement('ul', {},
//   React.createElement('li', {}, 'item1')
// );

// BASIC IDEA OF AN ARRAY OF NESTED ITEMS
const myFirstElement = React.createElement('ul', {}, [
  React.createElement('li', {}, 'item1'),
  React.createElement('li', {}, 'item2'),
  React.createElement('li', {}, 'item3')
]);

ReactDOM.render(myFirstElement, reactContentRoot);














// const incrementBtn = document.getElementById('increment-button');
// const countDisplay = document.getElementById('count-display');

// let currentCount = 0;

// incrementBtn.addEventListener('click', () => {
//   currentCount+=1;
//   countDisplay.innerText = currentCount;
// });
