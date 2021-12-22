export const USER_API_URL = {
    getUser: 'user/',
    getUserById: (id) => `user/${id}`,

}

export const AUTH_API_URL = {
    postLogin: 'auth/login'
}

export const BOOK_API_URL = {
    getBookById: (id) => `book/${id}`,
    getBookList: 'book/getList',
}