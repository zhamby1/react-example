//this is the new ES6 way to import modules...we say import and then the file location (. means current folder)
import './App.css';
function CourseList() {
   const courses = [
      { id: 1, title: "African History" },
      { id: 2, title: "Greek II" }, 
      { id: 3, title: "Basic Chemistry" }
   ];

   return (
      <ul>
         {courses.map(course => 
            <li key={course.id}>
               {course.title}
            </li>)}
      </ul>
   );
}


function App() {
   return (
      <CourseList />
   );
}





//export export the file as a module for other files to use
export default App;
