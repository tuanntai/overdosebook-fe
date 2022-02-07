export const USER_API_URL = {
    getUser: 'users/',
    getUserById: (id) => `users/${id}`,
    postUser: 'users/',
    addFund: 'users/addFund',
    getBookByUserId: (userId) => `users/getBookByUserId/${userId}`
}

export const AUTH_API_URL = {
    postLogin: 'auth/login'
}

export const BOOK_API_URL = {
    getBookById: (id) => `book/${id}`,
    getBookList: 'book/getList',
    getAllBooks: (page) => `book/allbooks/page/${page}`,
    buyBooks: () => `book/buybooks`
}

