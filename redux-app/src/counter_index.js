
// counter reducer example.

// When writing a reducer, 
// if state is not defined, return an initial state.
/*
In this counter example, 
we return 0 since our count will start from there. 
If the action being passed in isn't one the reducer recognizes, 
we just return the current state.
*/

import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
const counterReducer = (state = 0, action) => {
    console.log("Action received: ");
    console.log(action);
    
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
/*
const incAction = { type: 'INCREMENT' };
const decAction = { type: 'DECREMENT' };
const otherAction = { type: 'OTHER' };

console.log(counter(0, incAction));
console.log(counter(1, decAction));
console.log(counter(0, otherAction));
*/

const Counter = ({value, onInc, onDec}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onInc}>+</button>
        <button onClick={onDec}>-</button>
    </div>
);
const store = createStore(counterReducer);
const render = () => {
    console.log("Current state: ");
    console.log(store.getState());
    
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onInc={() => 
                store.dispatch({
                    type: "INCREMENT"
                })
            }
            onDec={() =>
                store.dispatch({
                    type: "DECREMENT"
                })
            }
        />,
        document.getElementById("root")
    );
};

// const store = createStore(counterReducer);
// console.log(store.getState()); // 0

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState()); // 1

// If there is a function print() and you write 
// store.subscribe(print);
// the print() function will be called every time if an action has been dispatched.

store.subscribe(render);

render();




