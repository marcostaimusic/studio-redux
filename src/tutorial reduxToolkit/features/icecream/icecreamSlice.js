const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
	numOfIcecreams: 20
}

const icecreamSlice = createSlice({
	name: 'icecreams',
	initialState,
	reducers: {
		ordered: (state) => {
			state.numOfIcecreams--
		},
		restocked: (state, action) => {
			state.numOfIcecreams += action.payload
		}
	},
	// VERSIONE 1
	// extraReducers: {
	//     'cake/ordered': (state) => {
	//         state.numOfIcecreams--
	//     },
	// }
	// VERSIONE 2, la più usata in redux toolkit
	extraReducers: (builder) => {
		builder.addCase(
			cakeActions.ordered,
			(state, action) => {
				state.numOfIcecreams--
		})   
	}
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions