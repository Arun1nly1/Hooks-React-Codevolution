import React, { useReducer } from 'react';
// use Reducer second example as per video 63 complex actions
const initialState = {
    fistCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, fistCounter: state.fistCounter + action.value }

        case 'decrement':
            return { ...state, fistCounter: state.fistCounter - action.value }

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }

        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }

        case 'reset':
            return initialState

        default:
            return state
    }
}

export default function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>FirstCounter - {count.fistCounter}</div>
            <div>SecondCounter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement5</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment5</button>
            <div>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>DecrementCounter2</button>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>IncrementCounter2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}
