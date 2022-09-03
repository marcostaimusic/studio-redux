const store = require('./App/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('updated', store.getState());
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(12))


unsubscribe()