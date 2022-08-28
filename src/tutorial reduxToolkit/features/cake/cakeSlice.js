const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numsOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numsOfCakes--
        },
        restocked: (state, action) => {
            state.numsOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.export.cakeActions = cakeSlice.actions