//this is the new ES6 way to import modules...we say import and then the file location (. means current folder)
import './App.css';

  //not only can we use javascript to make variables out of html elements, we can create componenents
  //componenets are kind of like objects in javascript as they can contain multiple elements or variables
  //there is a keyword we can use called props
  //props stand for properties, and allow you to change information inside you component by giving it an argument
  //it is just like a parameter, excepts it allows you to enter multiple unknown properties within the body of the component
function Greeting(props){
   return (
      <>
      <h1>Hello!, {props.fname}</h1>
      <p>Goodbye, {props.lname}</p>
      </>
  
  )
}

function App(){

  const component = <Greeting fname="Zach" lname = "Hamby"/>
  return (
    component
  )
  
}



//export export the file as a module for other files to use
export default App;
