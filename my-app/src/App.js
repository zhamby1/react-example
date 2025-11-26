//this is the new ES6 way to import modules...we say import and then the file location (. means current folder)
import './App.css';

function Light(props) {
   if (props.on) {
      return <p>Light is on!</p>;
   }
   else {
      return <p>Light is off.</p>;
   }
}


function Account(props) {

  if(props.balance > 0.00){
   return (
      <>
         <h1>Account Information</h1>
         
          <p>You owe ${props.balance}.</p>
         
      </>
   );
  }
}


function App() {
   return (
      <Account balance={10.00} />
   );
}





//export export the file as a module for other files to use
export default App;
