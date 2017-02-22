/* CREATE A COMPONENT

In its most basic form, to create a React component you just write a function 
(with a capitalized name by convention) that returns JSX. The JSX should represent 
the intended HTML of the rendered component.

*/

var GroceryList = () => (
  <ul>
  	<Kiwis />
  	<Honeydew />
  </ul>
);

var Kiwis = () => (
  <li>Kiwis</li>
);

var Honeydew = () => (
  <li>Honeydew</li>
);

/* 
To render a React component you use ReactDOM.render(componentInstance, DOMElement). 
JSX returns a component instance when you wrap a component in an HTML tag. 

*/

ReactDOM.render(<GroceryList />, document.getElementById('app'));