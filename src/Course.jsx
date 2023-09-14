import frame from './assets/frame.png'
import dollar from './assets/dollar.png'
const Course = ({course,hendleSelect}) => {

   const{title, cover,description,credit,price}=course
    return (
        <div className="w-[312px] bg-white h-auto p-4 mx-20 my-7 rounded-xl">
            <img src={cover} alt="" />
            <h1 className="font-bold text-lg mt-5">{title}</h1>
            <h2 className=" mt-5 h-[80px]">{description}</h2>
            <div className="flex justify-between font-medium mt-5">
                <div className="flex justify-between gap-3"><img src={dollar} alt="" /><p>price: {price}</p></div>
                <div className="flex justify-between gap-3 items-center" ><img src={frame} alt="" /><p>Credit: {credit} hr</p></div>
            </div>
            <button className="bg-sky-600 rounded text-white py-2 my-6 w-full" onClick={()=>hendleSelect(course)}>Select</button>
      
        </div>
    );
};

export default Course;