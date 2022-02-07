import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { postLogin, postUser } from "../actions/auth/auth";
const initialState = {
    token: '',
    isAuthorized: false,
    errors: '',
    loading: false,
    nonce: '',
    walletAddress: '',
    userId: 0,
    userInfo: {}
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.token = '';
            state.isAuthorized = false
        },
    },
    extraReducers: builder => {
        builder
            .addCase(postLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(postLogin.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload.accessToken
                state.userId = action.payload.userId
                state.isAuthorized = true
            })
            .addCase(postLogin.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
        builder.addCase(postUser.pending, (state) => {
            state.loading = true
        }).addCase(postUser.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        }).addCase(postUser.rejected, (state, action) => {
            state.loading = false
            state.errors = action.payload
        })

    }

})
const selectSelf = (state) => state.auth;
const isAuthorizedSelector = createSelector(
    selectSelf,
    (state) => state.isAuthorized
)

const getTokenSelector = createSelector(
    selectSelf,
    (state) => state.token
)

const userIdSelector = createSelector(
    selectSelf,
    (state) => state.userId
)


export const authSelectors = {
    getTokenSelector,
    isAuthorizedSelector, userIdSelector
}

export const { logout } = authSlice.actions;
export default authSlice.reducer;