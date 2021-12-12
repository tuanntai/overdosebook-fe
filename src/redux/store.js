import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
const reducer = {
    auth: authReducer,
};

const store = configureStore({
    reducer,
});

export default store;
