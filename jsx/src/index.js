// import the React and ReactDom libraries


import React from 'react';
import ReactDom from 'react-dom';


// create a react component
// component using a function with the function key word => const App = function () {return<div></div>;};  re written below


const App = () => {
  const buttonText = 'Click me!';
  const labelText = 'Enter Name!';
  return (
    <div>
      <label className="label" htmlFor={'name'}>{labelText}</label>
      <input id="name" type="text" />
        <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
    </div>
  );
};




// take the react component and display it on the screen

ReactDom.render(
  <App />, 
  document.querySelector('#root')
);



