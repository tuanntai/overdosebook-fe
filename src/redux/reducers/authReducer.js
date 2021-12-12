import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
const initialState = {
    token: '',
    nonce: '',
    isAuthorized: false,
    errors: {},
    loading: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutSuccess(state) {
            state.token = null;
        },
        setAuthorized: (state, action) => {
            state.isAuthorized = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setNonce: (state, action) => {
            state.nonce = action.payload
        }
    },

})
const selectSelf = (state) => state.auth;
const isAuthorizedSelector = createSelector(
    selectSelf,
    (state) => state.isAuthorized
)

const getNonceSelector = createSelector(
    selectSelf,
    (state) => state.nonce
)

const getTokenSelector = createSelector(
    selectSelf,
    (state) => state.token
)

export const authSelectors = {
    getNonceSelector,
    getTokenSelector,
    isAuthorizedSelector
}

export const { logoutSuccess, setAuthorized, setToken, setNonce } = authSlice.actions;
export default authSlice.reducer;