import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'image',
    initialState: {
        search: ''
    },
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions;