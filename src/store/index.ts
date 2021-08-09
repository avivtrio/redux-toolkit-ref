import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import counterReducer from './reducers/counter';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store;