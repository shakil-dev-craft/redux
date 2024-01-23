const { createStore } = require("redux");

// product constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart constants


const initialProductState = {
    products: ['sugar', 'salt'],
    numberofProducts: 2,
}

// actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
};

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};

// productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            
            return {
                ...state,
            };
        case ADD_PRODUCT:
            
            return {
              products: [...state.products, action.payload],
              numberofProducts: state.numberofProducts + 1,
            };
    
        default:
            return state;
    }
};

// store
const store = createStore(productReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch
// store.dispatch(getProducts());
// store.dispatch(addProduct('oil'));
// store.dispatch(addProduct('paper'));
// store.dispatch(addProduct('potato'));

// cartReducer