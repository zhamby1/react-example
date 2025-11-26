//this is the new ES6 way to import modules...we say import and then the file location (. means current folder)
import './App.css';


// function Greeting(props) {
//    function greetClick(event) {
//       const greeting = event.target.id === "helloBtn" 
//          ? "Hello" : "Hey";
            
//       alert(`${greeting}, ${props.name}!`);
//    }
 
//    return (
//       <div>
//          <button id="helloBtn" onClick={greetClick}>
//             Say Hello
//          </button>
//          <button id="heyBtn" onClick={greetClick}>
//             Say Hey
//          </button>
//       </div>
//    );
// }
function Greeting(props) {
   function greetClick(greeting) {
      alert(`${greeting}, ${props.name}!`);
   }
 
   return (
      <div>
         <button onClick={() => greetClick("Hello")}>
            Say Hello
         </button>
         <button onClick={() => greetClick("Hey")}>
            Say Hey
         </button>
      </div>
   );
}

//the way react works is everything is surrounded by a function.  It must be a return function
function App(){
  //jsx - html and javascript mixed
  //since we can mix html and JS, we can use js variables with html elements
  //we are using const alot?  Why
  //this all about state which we will talk about later but basically const is set but not changed and is re-rendered each time the page refreshes
  return (
    <Greeting name="Zach" />
  )
  
}



//export export the file as a module for other files to use
export default App;
