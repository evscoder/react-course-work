import { createSlice } from '@reduxjs/toolkit';
export interface WelcomeState {
    value: string
}

const initialState: WelcomeState = {
    value: ''
};

const welcomeSlice = createSlice({
    name: 'welcomeSlice',
    initialState,
    reducers: {
    }
});

export const { userName } = welcomeSlice.actions;
export default welcomeSlice.reducer;
