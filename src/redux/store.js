import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import navigateReducer from "./reducers/navigateReducer";
const reducer = {
    auth: authReducer,
    navigate: navigateReducer
};

const store = configureStore({
    reducer,
});

export default store;
