import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFundApi, getUserByIdApi, getBookByUserIdApi } from "../../../api/user/user";
import { instanceOfDataError } from "../../../utils/apiError";

export const getUserById = createAsyncThunk('user/getUserById', async (id, { rejectWithValue }) => {
    const data = await getUserByIdApi(id);
    if (instanceOfDataError(data)) {
        rejectWithValue(data.error);
    }
    return data
})

export const addFundAction = createAsyncThunk('user/addFund', async ({ id, balance }) => {
    const data = await addFundApi({ id, balance })
    return data;
})

export const getBookByUserId = createAsyncThunk('user/getBookById', async (userId) => {
    const data = await getBookByUserIdApi(userId);
    return data;
})