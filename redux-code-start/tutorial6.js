// working need
// .........................

const { createStore } = require("redux");

// state - count = 0;
// action - increment, decrement, reset
// reducer
// store

// constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const ADD_USER = "ADD_USER";

// initialize state
const initialState = {
  users: ['shakil'],
  count: 1,
};

// actions

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  };
};

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// reducer
const counterReducer = (state = initialState, action) => {
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
    case RESET:
      return {
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
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

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterByValue());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(10));

store.dispatch(addUser('khushi'));
store.dispatch(addUser('salma'));
store.dispatch(addUser('jonaki'));
