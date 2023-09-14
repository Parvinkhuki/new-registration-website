import { useEffect, useState } from "react";
import Course from './Course'
const Courses = ({hendleSelect}) => {
    const [courses,setCourses]=useState([])

    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    
        console.log(courses)

    },[])
 


    return (
        <div  className="grid grid-cols-3 w-2/3" >
          {  courses.map(course=><Course
           key={course.id}
           course={course}
           hendleSelect={hendleSelect}
          
          ></Course>)
}
        </div>
    );
};

export default Courses;