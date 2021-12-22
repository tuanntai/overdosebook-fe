import axiosConfig from "../api/axiosConfig";
import { handleServiceError } from "./apiError";

export const getApi = async (path, config) => {
  try {
    const response = await axiosConfig.get(path, config);
    return response.data;
  } catch (error) {
    return handleServiceError(error);
  }
};

export const postApi = async (path, payload, config) => {
  try {
    const response = await axiosConfig.post(path, payload, config);
    return response.data;
  } catch (error) {
    return handleServiceError(error);
  }
};

export const putApi = async (path, payload, config) => {
  try {
    const response = await axiosConfig.put(path, payload, config);
    return response.data;
  } catch (error) {
    return handleServiceError(error);
  }
};

export const deleteApi = async (path) => {
  try {
    const response = await axiosConfig.delete(path);
    return response.data;
  } catch (error) {
    return handleServiceError(error);
  }
};
