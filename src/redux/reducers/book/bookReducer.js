import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getBookById, getBookList } from "../../actions/book/book";

const initialState = {
    bookList: [],
    bookInfo: {},
    loading: false,
    errors: null,
    success: true,
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBookList.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBookList.fulfilled, (state, action) => {
                state.loading = false;
                state.bookList = action.payload;
            })
            .addCase(getBookList.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            });
        builder
            .addCase(getBookById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBookById.fulfilled, (state, action) => {
                state.loading = false;
                state.bookInfo = action.payload;
            })
            .addCase(getBookById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            });
    },
});

const selectSelf = (state) => state.book

const bookListSelector = createSelector(selectSelf, (state) => state.bookList)
const bookByIdSelector = createSelector(selectSelf, (state) => state.bookInfo)

export const bookSelectors = {
    bookListSelector, bookByIdSelector
}

export default bookSlice.reducer;
