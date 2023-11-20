import React from 'react';
import { useReducer } from 'react';

export default function Temp() {

    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + action.payload };
            case 'DECREMENT':
                return { count: state.count - action.payload };
            default:
                throw new Error('Unsupported action type');
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 2 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>Decrement</button>
        </div>
    )
}
