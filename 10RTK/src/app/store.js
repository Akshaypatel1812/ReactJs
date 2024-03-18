import { configureStore } from '@reduxjs/toolkit'
import cReducer from '../features/counter/counterSlice'
export const store = configureStore({
    reducer: {
        counter: cReducer,
      },
})