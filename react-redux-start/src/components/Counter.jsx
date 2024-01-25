import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // btn
    const handleIncrement = () => {
        const total = count + 1;
        setCount(total);
    };

    const handleDecrement = () => {
        if(count === 0) {
            return 0;
        }
        const total = count - 1;
        setCount(total);
    };

    const handleReset = () => {
        const total = 0;
        setCount(total);
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

export default Counter;


// Counter -> Counter2 -> Counter3 -> Counter4
