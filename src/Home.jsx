import Courses from "./Courses";
import Cart from "./Cart";
import { useState } from "react";

const Home = () => {
    const [selectCourse,setSelectCourse]=useState([])

    const hendleSelect=(course)=>{
      setSelectCourse([...selectCourse,course])
        console.log(selectCourse)
    }
    return (
        <div className="flex mx-7">
            <Courses 
    hendleSelect={hendleSelect}></Courses>
            <Cart 
            selectCourse={selectCourse}></Cart>
        </div>
    );
};

export default Home;