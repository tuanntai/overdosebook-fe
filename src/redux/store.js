import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import bookReducer from "./reducers/book/bookReducer";
import navigateReducer from "./reducers/navigateReducer";
const reducer = {
    auth: authReducer,
    navigate: navigateReducer,
    book: bookReducer
};

const store = configureStore({
    reducer,
});

export default store;
