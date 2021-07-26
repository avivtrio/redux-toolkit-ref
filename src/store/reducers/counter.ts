import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action: PayloadAction<number>) {
            state.counter += action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer