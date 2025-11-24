//this is the new ES6 way to import modules...we say import and then the file location (. means current folder)
import './App.css';

//we are going to combine and nest multiple components
//we are making a review website for movies..they are going to be separated by review and star rating.
//the star rating will be a componenent inside of the review component

function Rating(props){
  return(
    //besides having a fragment you can also use a div to surround a component to render multiple items
    <div>
      {props.stars} / 4 stars
    </div>
  )
}

//insert rating component between review by and review text
//the cool thing about components nesting, is that we can create a new property in the parent component and pass it to a property in the child component
function Review(props){
  return(
    <div>

      <div>
        <h1>{props.movie_name}</h1>
      </div>

      <div>
        <h2>Review by {props.username}</h2>
      </div>

      <p><Rating stars = {props.star_rating} /></p>

      <div>
        <p>{props.text}</p>
      </div>


    
    </div>
  )
}

//the way react works is everything is surrounded by a function.  It must be a return function
function App(){
//components can be used together and inside of each other
//lets create a imdb like movie review page
//for number types we need to use {}
  return (
    <>
    <Review movie_name = "Star Wars" username = "Zach Hamby" star_rating = {3} text = "Star wars is a great movie" />
    <Review movie_name = "Indiana Jones" username = "Zach Hamby" star_rating = {4} text = "Indiana Jones Rocks" />
    </>
  )
  
}



//export export the file as a module for other files to use
export default App;
