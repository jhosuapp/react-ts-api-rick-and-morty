import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    counter: number
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions;