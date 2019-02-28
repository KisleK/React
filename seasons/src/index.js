import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'




class App extends React.Component {


    // constructor not required by react, but is a function that belongs to JS language
    // constructor function is the first function in a JS class, any time an instance of this class is created. (new instances of the APP class)
    //constructor function is a good place to initialize state
   //constructor (props) {
    //   super(props); // must call super or will throw an error
       //this.state = { lat: null, errMessage: '' };  //This is one way to initialize state //this is the state object THE ONLY TIME WE EVER DO A DIRECT ASSIGNMENT TO this.state
//}

state = { lat: null, errMessage: '' };// this is the refactored "other" way to initialize state // When doing this you do not need a constructor function or to call super

    componentDidMount(){ //must be written outside of constructor


        window.navigator.geolocation.getCurrentPosition (
            (position) => this.setState({ lat: position.coords.latitude }),
                // WE DID NOT DO A DIRECT ASSIGNMENT
                // THIS IS A DIRECT ASSIGNMENT      this.state ({ lat: position.coords.latitude });
            (err) => this.setState({ errMessage: err.message  })
        );
    }


    // React says we have to define Render!!
    // must use render any time we make a class based component
    render () {
        if (this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>;
        }
        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner message="Please accept location request"/>;
    }
}


ReactDom.render (
  <App/>,
  document.querySelector('#root')
);