import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isShowDirectToPrevious: false,
    isShowFilterCategory: true,
    currentPage: ''
}
const navigateSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.currentPage
        }
    }
})

const selectSelf = (state) => state.navigate
export const { setCurrentPage } = navigateSlice.actions
export default navigateSlice.reducer
