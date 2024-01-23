const { createStore } = require("redux");

// define constructor 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

// initial state
const initialCounterState = {
    count: 0,
}

// const initialUsersState = {
//     users: [
//         {name: 'Shakil'}
//     ]
// }

// action
const incrementCounter = () => {
    return {
      type: INCREMENT,
    };
};

const decrementCounter = () => {
    return {
      type: DECREMENT,
    };
};

// const addUser = (user) => {
//     return {
//       type: ADD_USER,
//       payload: user,
//     };
// };

// reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            
            return {
                ...state,
                count: state.count - 1,
            };
    
        default:
            return state;
    }
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());