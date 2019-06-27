
import { createStore } from 'redux';


//action generator

const add = (data) => {
    return data.a + data.b;
};

console.log(add({ a: 1, b: 2 }));

//destructure
const add2 = ({ a, b }, c) => {
    return a + b + c;
}

console.log(add2({ a: 1, b: 2 }, 100));


const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {


        case 'INCREMENT':

            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':

            return {
                count: state.count - action.decrementBy
            };

        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }




});
const setCount =({count})=>{

    return {
        type:'SET',
        count
    }
}
const resetCount =()=>{

    return {
        type:'RESET'
    }
}

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy


    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {

    return {
        type: 'DECREMENT',
        decrementBy
    }
}
const unsubscribe = store.subscribe(() => {
    // start watching .........store change
    console.log(store.getState());
});



store.dispatch(incrementCount());


store.dispatch(incrementCount({ incrementBy: 51 }));


store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(setCount({count:100}));
store.dispatch(resetCount());




unsubscribe();// stop watching
