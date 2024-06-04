import {useDispatch,useSelector} from "react-redux"
import { increment, decrement , incrementByAmount } from "../../redux/counterSlice";

const Counting = () => {
    const dispatch = useDispatch();
    const count = useSelector(
        (state: {counter:{value:number}}) => state?.counter?.value
);

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-x-5">
            <button className="p-5 w-full h-20 bg-green-500 text-white" 
                onClick={()=> dispatch(increment())}
            >   
                increment
            </button>
            <h3>counter : {count}</h3>
            <button className="p-5 w-full h-20 bg-red-500 text-white"
            onClick={()=> dispatch(decrement())}
            >
                decrement
            </button>
        </div>
        <div className="my-5">
            <button
            onClick={() => dispatch(incrementByAmount(count))}
            className="p-5 w-full h-20 bg-orange-500 text-white"
            >
                incrementByAmount
            </button>
        </div>
    </main>
  )
}

export default Counting