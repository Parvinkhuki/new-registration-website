
const Cart = ({selectCourse}) => {
  
  
 
    return (
        <div className="w-1/3 mx-20 h-[500px] mt-10 sticky top-2  p-10 space-y-4 bg-white">
           <h1 className="text-sky-400 font-bold">Credit hours remaining {20} hrs</h1> 
           <hr />
           <h1 className="font-bold text-lg">course Name</h1>
           {
            selectCourse.map((course)=>(
                <ol key={course.id} className="">
                    <li>{course.title}</li>
                </ol>
            ))
           }
           <hr />
           <h1>total cridit Hour: {0}</h1>

        </div>
    );
};

export default Cart;