import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isClose: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        isOpenModal: (state, action) => {
            state.isOpen = true
        },
        isCloseModal: (state, action) => {
            state.isOpen = false
        }
    }


})
export const { isOpenModal, isCloseModal } = modalSlice.actions
export default modalSlice.reducer