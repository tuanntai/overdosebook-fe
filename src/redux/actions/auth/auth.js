import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_API_URL } from "../../../api/apiUrl";
import axiosConfig from "../../../api/axiosConfig";
import { instanceOfDataError } from "../../../utils/apiError";
import { removeAccessToken, setAccessToken } from "../../../utils/localStorageService";


export const postLogin = createAsyncThunk('auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        const response = await axiosConfig.post(AUTH_API_URL.postLogin,
            { username, password })
        if (instanceOfDataError(response)) {
            return rejectWithValue(response.error);
        }
        setAccessToken(response.data.accessToken)
        setTimeout(removeAccessToken(), response.data.expiresIn * 60 * 60)
        return response.data
    })