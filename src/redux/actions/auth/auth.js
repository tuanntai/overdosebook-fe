import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_API_URL } from "../../../api/apiUrl";
import axiosConfig from "../../../api/axiosConfig";
import { postUserApi } from "../../../api/user/user";
import { instanceOfDataError } from "../../../utils/apiError";
import { setAccessToken } from "../../../utils/localStorageService";
import { getUserById } from "../user/user";


export const postLogin = createAsyncThunk('auth/login', async ({ username, password }, { rejectWithValue, dispatch }) => {
    const response = await axiosConfig.post(AUTH_API_URL.postLogin, { username, password })
    if (instanceOfDataError(response)) { return rejectWithValue(response.error); }
    setAccessToken(response.data.accessToken)
    dispatch(getUserById(response.data.userId))
    return response.data
})


export const postUser = createAsyncThunk('user/create', async ({ username, password }, { rejectWithValue }) => {
    const response = await postUserApi({ username, password })
    if (instanceOfDataError(response)) { return rejectWithValue(response.error); }
    return response
})