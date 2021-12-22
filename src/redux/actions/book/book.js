import { createAsyncThunk } from "@reduxjs/toolkit"
import { getBookByIdApi, getBookListApi } from "../../../api/book/book"
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