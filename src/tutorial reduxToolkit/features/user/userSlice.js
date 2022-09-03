const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


const initialState = {
    loading :false,
    users: [],
    error: ''
}

// creates pending, fulfilled or rejected action types
const fetchUser = createAsyncThunk('user/fetchUser', ()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map(user=>user.id))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action)=> {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUser = fetchUser