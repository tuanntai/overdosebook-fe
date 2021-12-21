import { postApi } from "../../utils/apiHelper";
import { AUTH_API_URL } from "../apiUrl";

export const postLoginApi = async ({ username, password }) => {
    const data = await postApi(AUTH_API_URL.postLogin, { username, password })
    return data
}





