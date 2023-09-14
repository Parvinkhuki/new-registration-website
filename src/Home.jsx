import Courses from "./Courses";
import Cart from "./Cart";
import { useState } from "react";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [selectCourse,setSelectCourse]=useState([])
    const [totalHrs,setTotalhrs]=useState([0])
    const [remainghrs,setremainghrs]=useState([20])
    const [totalcost,setTotalcost]=useState([0])
  
    const hendleSelect=(course)=>{
        let count=course.credit
        let price=course.price
        console.log(count)
        const exist=selectCourse.find(newCourse=>newCourse.id===course.id)
        if (exist) {
          return  toast("it already have")
        }
     else{
        selectCourse.forEach((newCourse)=>{
          
           count+=newCourse.credit
           price+=newCourse.price
        })
        if(count>20){
            return toast("you can only add under or equal 20 hrs ")
        }
        setTotalhrs(count)
        const remaining= 20 - count
        if(remaining<0){
            return toast('remaining hrs cannot be 0 hrs')
        }
      
      
        console.log(totalHrs)
        console.log(remaining)
        setTotalcost(price)
        setremainghrs(remaining)
        setSelectCourse([...selectCourse,course])
     }
     
    }
    return (
        <div className="flex mx-7">
            <Courses 
    hendleSelect={hendleSelect}></Courses>
            <Cart 
            selectCourse={selectCourse}
            totalHrs={totalHrs}
            remainghrs={remainghrs}
            totalcost={totalcost}
            ></Cart>
        </div>
    );
};

export default Home;