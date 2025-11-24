//this is the new ES6 way to import modules...we say import and then the file location (. means current folder)
import './App.css';

//the way react works is everything is surrounded by a function.  It must be a return function
function App(){
  //jsx - html and javascript mixed
  //since we can mix html and JS, we can use js variables with html elements
  //we are using const alot?  Why
  //this all about state which we will talk about later but basically const is set but not changed and is re-rendered each time the page refreshes
  return (
    <>
      <h1>Hello World</h1>
      <p>Goodbye</p>
    </>
  )
  
}



//export export the file as a module for other files to use
export default App;
