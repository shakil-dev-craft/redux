

const Counter2 = () => {
    

    // btn
    const handleIncrement = () => {

    };

    return (
        <div className="text-center">
            <h1>Counter App</h1>
            <h3>Count: 0</h3>
            <div className="flex gap-5 mt-5">
                <button className=" py-2 px-5 text-white bg-green-600" onClick={handleIncrement}>Increment</button>
                <button className=" py-2 px-5 text-white bg-yellow-600" >Decrement</button>
                <button className=" py-2 px-5 text-white bg-red-600" >Reset</button>
            </div>
        </div>
    );
};

export default Counter2;


// Counter -> Counter2 -> Counter3 -> Counter4
