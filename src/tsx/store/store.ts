import { configureStore } from '@reduxjs/toolkit'
//Slices
import { counterSlice } from './slices/counter';
import { lazyImageSlice } from './slices/lazyImage';
import { searchSlice } from './slices/search';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        lazyImage: lazyImageSlice.reducer,
        search: searchSlice.reducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;