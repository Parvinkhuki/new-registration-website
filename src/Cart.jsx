
const Cart = ({selectCourse,remainghrs, totalHrs ,totalcost}) => {
  
  
 
    return (
        <div className="w-1/3 mx-20 h-[500px] mt-10 sticky top-2  p-10 space-y-4 bg-white">
           <h1 className="text-sky-400 font-bold">Credit hours remaining {remainghrs} hrs</h1> 
           <hr />
           <h1 className="font-bold text-lg">course Name</h1>
           {
            selectCourse.map((course,i)=>(
                <ol key={course.id} className="">
                    <li>{i+1}.{course.title}</li>
                </ol>
            ))
           }
           <hr />
           <h1><span className="font-bold">total Credit:</span> {totalHrs} hrs</h1>
           <h1><span className="font-bold">total price:</span> {totalcost} $</h1>

        </div>
    );
};

export default Cart;