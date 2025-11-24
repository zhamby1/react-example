//we have to import Rating for this component to work
//we are going to use ES6 syntax this time to import the component
import Rating from "./Rating"

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

//we also have to export this function/component for App.js to use it
export default Review