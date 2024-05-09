import { configureStore } from '@reduxjs/toolkit'
//Slices
import { counterSlice } from './slices/test/testSlice';

export const store = configureStore({
    reducer: {
        test: counterSlice.reducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;