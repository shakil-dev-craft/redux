import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/counterActions";


const Counter2 = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    
    // console.log(count);

    // btn
    const handleIncrement = () => {
        dispatch(incrementCounter());
    };

    const handleDecrement = () => {
        if(count === 0) {
            return 0;
        }
        dispatch(decrementCounter());
    };

    const handleReset = () => {
        dispatch(resetCounter());
    };

    return (
        <div className="text-center">
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <div className="flex gap-5 mt-5">
                <button className=" py-2 px-5 text-white bg-green-600" onClick={handleIncrement}>Increment</button>
                <button className=" py-2 px-5 text-white bg-yellow-600" onClick={handleDecrement}>Decrement</button>
                <button className=" py-2 px-5 text-white bg-red-600" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter2;


// Counter -> Counter2 -> Counter3 -> Counter4
// 1. state - count : 0
// 2. actions - increment, decrement, reset
// 3. reducers - increment -> count => count + 1;
// -> decrement -> count - 1;
// -> reset -> count = 0;
// 4. store
// 5. providing store in react
// 6. use store 