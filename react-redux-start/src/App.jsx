import Counter2 from "./components/Counter2"


function App() {

  return (
    <div className='App flex flex-col justify-center items-center'>
      <h1>Welcome to react-redux</h1>
      <Counter2 />
    </div>
  )
}

export default App

// state - count : 0
// actions - increment, decrement, reset
// reducers - increment -> count => count + 1;
// -> decrement -> count - 1;
// -> reset -> count = 0;