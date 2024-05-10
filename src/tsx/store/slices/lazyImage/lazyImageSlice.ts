import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface LazyImageState {
    images: Record<string, string>;
};

const initialState: LazyImageState = {
    images: {},
};

export const lazyImageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImage(state, action: PayloadAction<{ image: string }>) {
            const { image } = action.payload;
            state.images[image] = image;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setImage } = lazyImageSlice.actions;