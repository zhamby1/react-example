//this is the new ES6 way to import modules...we say import and then the file location (. means current folder)
import './App.css';
import Review from './components/Review';





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
