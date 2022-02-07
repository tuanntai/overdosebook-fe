import { getApi, postApi } from "../../utils/apiHelper";
import { USER_API_URL } from "../apiUrl";

export const postUserApi = async ({ username, password }) => {
  const data = await postApi(USER_API_URL.getUser, { username, password });
  return data;
};

export const getUserByIdApi = async (id) => {
  const data = await getApi(USER_API_URL.getUserById(id));
  return data;
};


export const addFundApi = async ({ id, balance }) => {
  const data = await postApi(USER_API_URL.addFund, { userId: id, balance: balance })
  return data
}

export const getBookByUserIdApi = async (userId) => {
  const data = await getApi(USER_API_URL.getBookByUserId(userId))
  return data
}