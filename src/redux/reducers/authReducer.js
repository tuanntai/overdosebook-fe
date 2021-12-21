import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { postLogin } from "../actions/auth/auth";
const initialState = {
    token: '',
    isAuthorized: false,
    errors: '',
    loading: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.token = '';
            state.isAuthorized = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(postLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(postLogin.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload.accessToken
                state.isAuthorized = true
            })
            .addCase(postLogin.rejected, (state, action) => {
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

export const authSelectors = {
    getTokenSelector,
    isAuthorizedSelector
}

export const { logout } = authSlice.actions;
export default authSlice.reducer;