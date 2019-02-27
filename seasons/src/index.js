import React from 'react';
import ReactDom from 'react-dom';





class App extends React.Component {
    // not required by react, but is a function that belongs to JS language
    // constructor function is the first function in a JS class, any time an instance of this class is created. (new instances of the APP class)
    //constructor function is a good place to initialize state
   constructor (props) {
       super(props);

       this.state = { lat: null };  //this is the state object

   }

    // React says we have to define Render!!
    // must use render any time we make a class based component
    render () {
        window.navigator.geolocation.getCurrentPosition (
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: {this.state.lat} </div>
    }
}


ReactDom.render (
  <App/>,
  document.querySelector('#root')
);