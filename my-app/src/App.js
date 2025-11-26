//we are going to import the useState module from react
import { use, useState } from "react";


// function Greeting(props) {
//   //usestate allows us to creation a variable that lets us know that the state of the variable can change based on event or certain types of conditions.
//   //all these variables will use an array that is almost like a getter and setter - data itself, and something to change the data
//   //we can also give the data default values
//   const [greeting, setGreeting] = useState("Hi")
  
   
 
//    return (
//     <div>
//     <p>{greeting}</p>
    
//     <button onClick={() => setGreeting(`Hello, ${props.name}`)}>
//       Say Hello
//     </button>

//     <button onClick={() => setGreeting(`Hey, ${props.name}`)}>
//       Say Hey
//     </button>

//     </div>
    

//    );
// }

function Movie(){
  //multiple stateful variables
  const [title,setTitle] = useState("Titanic")
  const [rating,setRating] = useState("PG-13")
  const [releaseYear, setReleaseYear] = useState("1996")
  
  function changeMovie(){
    setTitle('Transformers')
    setRating('PG')
    setReleaseYear('2006')
  }

  return(
    <>
    <h1>My Favorite Movie</h1>
    <p>
      {title}, {rating}, {releaseYear}
    </p>

    <button onClick={changeMovie}>
      Change My Favorite Movie
    </button>
    
    </>
  )
}

function MovieObject(){
  //instead of having sepearted values, we instead want to create an object literal with a bunch of values inside of it

  const [movie, setMovie] = useState({
    title: 'Inception',
    rating: 'PG-13',
    releaseYear: '2010'
  })
  
  function changeTitle(){
    //many times when changing an object we don't need to change everything about an object
    //we can use something called previous state to grab the current state and stick in just the changes
    setMovie(prevState => ({
      ...prevState, title:'Titanic'
    }))
  }

  return(
    <>
    <h1>My Favorite Movie</h1>
    <p>
      {movie.title}, {movie.rating}, {movie.releaseYear}
    </p>

    <button onClick={changeTitle}>
      Change The Title
    </button>
    
    </>
  )
}

//the way react works is everything is surrounded by a function.  It must be a return function
function App(){
  //jsx - html and javascript mixed
  //since we can mix html and JS, we can use js variables with html elements
  //we are using const alot?  Why
  //this all about state which we will talk about later but basically const is set but not changed and is re-rendered each time the page refreshes
  return (
    <MovieObject />
  )
  
}



//export export the file as a module for other files to use
export default App;
