import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import counterSlice from "@/store/slice/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // disable to check A non-serializable value ( class instance, function,..)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>