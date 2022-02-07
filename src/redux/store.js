import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import bookReducer from "./reducers/book/bookReducer";
import navigateReducer from "./reducers/navigateReducer";
import userReducer from "./reducers/user/userReducer";
const reducer = {
    auth: authReducer,
    navigate: navigateReducer,
    book: bookReducer,
    user: userReducer
};

const store = configureStore({
    reducer,
});

export default store;
