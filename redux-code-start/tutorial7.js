const { createStore, combineReducers } = require("redux");

// product constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// initial products state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberofProducts: 2,
}

// initial cart state
const initialCartState = {
  cart: ["sugar"],
  numberofProducts: 1,
};


// product actions
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

// cart actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    }
};

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
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

// cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            
            return {
                ...state,
            };
        case ADD_CART_ITEM:
            
            return {
              cart: [...state.cart, action.payload],
              numberofProducts: state.numberofProducts + 1,
            };
    
        default:
            return state;
    }
};


// Root Reducer
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});


// store
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch
store.dispatch(getProducts());
store.dispatch(addProduct('oil'));
store.dispatch(addProduct('paper'));
store.dispatch(addProduct('potato'));

// cartReducer
store.dispatch(getCart());
store.dispatch(addCart('oil'));
store.dispatch(addCart('water'));