const redux = require('redux');

const initStateReducer = {
    id: 33,
    value: 55,
    title: 'Hellow'
};

const reducer = (state = initStateReducer, action) => {
    return state;
};

const initStateStore = {
    id: 3,
    value: 5
};

const store = redux.createStore(reducer, initStateStore);

console.log(store.getState()); // Шо тут?