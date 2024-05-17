import { createSlice } from '@reduxjs/toolkit';

export const hamburgerSlice = createSlice({
    name: 'image',
    initialState: {
        hamburger: false,
    },
    reducers: {
        setHamburger(state) {
            state.hamburger = !state.hamburger;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setHamburger } = hamburgerSlice.actions;