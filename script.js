// Initial State
const initialState = {
    value: 0
}

// Action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement'

// Action creators
const increment = (value) => {
    return {
        type : INCREMENT,
        payload: value
    }
}
const decrement = (value) => {
    return {
        type : DECREMENT,
        payload: value
    }
}

// Create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return state;
    }
}

// Create store
const store = Redux.createStore(counterReducer);

const render = ()=> {
    const state = store.getState()
    countEl.innerHTML = state.value.toString();
    return state.value;
}

store.subscribe(render)

// Event listener
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const countEl = document.getElementById('count');

incrementEl.addEventListener('click', ()=> {
    store.dispatch(increment(5))
})

decrementEl.addEventListener('click', ()=> {
    if(render() - 2 >= 0) {
        store.dispatch(decrement(2))
    }
})

render();