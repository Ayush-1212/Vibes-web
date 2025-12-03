import { configureStore } from "@reduxjs/toolkit";
import { bannersApi } from "../redux/api/bannerApi";
import { blogsApi } from "../redux/api/blogApi"; 

export const store = configureStore({
  reducer: {
    [bannersApi.reducerPath]: bannersApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannersApi.middleware,
      blogsApi.middleware 
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
