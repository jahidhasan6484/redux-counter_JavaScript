// Initial State
const initialState = {
    value: 0
}

// Create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
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
    store.dispatch({
        type : 'increment'
    })
})

decrementEl.addEventListener('click', ()=> {
    if(render() > 0) {
        store.dispatch({
            type : 'decrement'
        })
    }
})

render();