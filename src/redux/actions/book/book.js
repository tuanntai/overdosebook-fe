import { createAsyncThunk } from "@reduxjs/toolkit"
import { buyBookApi, getAllBooksApi, getBookByIdApi, getBookListApi } from "../../../api/book/book"
import { instanceOfDataError } from "../../../utils/apiError";


export const getBookList = createAsyncThunk('book/getBookList', async (_, { rejectWithValue }) => {
    const response = await getBookListApi();
    if (instanceOfDataError(response)) {
        return rejectWithValue(response.error);
    }
    return response
})


export const getBookById = createAsyncThunk('book/getBookById', async (id, { rejectWithValue }) => {
    const response = await getBookByIdApi(id);
    if (instanceOfDataError(response)) {
        return rejectWithValue(response.error);
    }
    return response
})

export const getAllBooks = createAsyncThunk('book/getAllBook', async (page, { rejectWithValue }) => {
    console.log('action', page)
    const response = await getAllBooksApi(page);
    if (instanceOfDataError(response)) {
        return rejectWithValue(response.error);
    }
    return response
})

export const buyBook = createAsyncThunk('book/buyBook', async ({ userId, bookId, amount }) => {
    const response = await buyBookApi({ userId, bookId, amount });
    return response
})

