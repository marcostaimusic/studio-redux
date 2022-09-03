const store = require('./App/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
    // console.log('updated', store.getState());
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(12))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())


unsubscribe()