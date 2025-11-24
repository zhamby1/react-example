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

//to make modules of components you are going to say export default and then filename (usually)
export default Rating