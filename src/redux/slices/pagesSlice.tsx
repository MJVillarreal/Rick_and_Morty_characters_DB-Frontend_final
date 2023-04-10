import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 1,
};

const pagesSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		nextPage: (state) => {
			state.value += 1;
		},
		previousPage: (state) => {
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 1;
		},
	},
});

export const { nextPage, previousPage, reset } = pagesSlice.actions;
export default pagesSlice.reducer;