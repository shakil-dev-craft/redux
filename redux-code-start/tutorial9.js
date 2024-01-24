// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api

const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");



// constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';


// state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
};


// actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
};

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
};

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
};


// reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_TODOS_FAILED:
            
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
    
        default:
            return state;
    }
};


// fetching functionality
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
};


// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});


// dispatch
store.dispatch(fetchData());