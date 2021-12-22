import { getApi } from "../../utils/apiHelper";
import { BOOK_API_URL } from "../apiUrl";


export const getBookListApi = async () => {
    const data = await getApi(BOOK_API_URL.getBookList)
    return data
}


export const getBookByIdApi = async (id) => {
    const data = await getApi(BOOK_API_URL.getBookById(id))
    return data
}