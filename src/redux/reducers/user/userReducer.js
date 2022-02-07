import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addFundAction, getBookByUserId, getUserById } from "../../actions/user/user";

const initialState = {
    loading: false,
    error: null,
    userInfo: {},
    ownerBook: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserById.pending, (state) => { state.loading = true }).addCase(getUserById.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        }).addCase(getUserById.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(addFundAction.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        })
        builder.addCase(getBookByUserId.fulfilled, (state, action) => {
            state.ownerBook = action.payload
        })
    }
})
const selectSelf = (state) => state.user
const getUserInfoSelector = createSelector(selectSelf, state => state.userInfo)
const getBookByUserIdSelector = createSelector(selectSelf, state => state.ownerBook)

export const userSelectors = { getUserInfoSelector, getBookByUserIdSelector }
export default userSlice.reducer