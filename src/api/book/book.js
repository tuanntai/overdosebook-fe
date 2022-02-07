import { getApi, postApi } from "../../utils/apiHelper";
import { BOOK_API_URL } from "../apiUrl";


export const getBookListApi = async () => {
    const data = await getApi(BOOK_API_URL.getBookList)
    return data
}


export const getBookByIdApi = async (id) => {
    const data = await getApi(BOOK_API_URL.getBookById(id))
    return data
}

export const getAllBooksApi = async (page) => {
    const data = await getApi(BOOK_API_URL.getAllBooks(page))
    return data
}

export const buyBookApi = async ({ userId, bookId, amount }) => {
    const data = await postApi(BOOK_API_URL.buyBooks(), { userId, bookId, amount })
    return data
}