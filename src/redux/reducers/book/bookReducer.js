import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { buyBook, getAllBooks, getBookById, getBookList } from "../../actions/book/book";

const initialState = {
    bookList: [],
    bookInfo: {},
    allBooks: {
        totalPage: 0,
        totalItem: 0,
        data: []
    },
    loading: false,
    errors: null,
    success: true,
    bookId: 0
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBookId(state, action) {
            state.bookId = action.payload
        }
    },
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
        builder
            .addCase(getAllBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.allBooks = action.payload;
            })
            .addCase(getAllBooks.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            });
        builder
            .addCase(buyBook.pending, (state) => {
                state.loading = true;
            })
            .addCase(buyBook.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.bookInfo.amount = action.payload;
                toast.success(action.payload)
            })
            .addCase(buyBook.rejected, (state, action) => {
                state.loading = false;
                toast.success(action.payload)
                console.log(action.payload)
            });
    },
});

const selectSelf = (state) => state.book

const bookListSelector = createSelector(selectSelf, (state) => state.bookList)
const allBooksSelector = createSelector(selectSelf, (state) => state.allBooks)
const bookByIdSelector = createSelector(selectSelf, (state) => state.bookInfo)

export const bookSelectors = {
    bookListSelector, bookByIdSelector, allBooksSelector
}

export const { setBookId } = bookSlice.actions

export default bookSlice.reducer;
