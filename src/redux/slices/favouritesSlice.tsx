import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../interfaces/character";

interface FavouritesState {
	favoritos: Character[];
}

const initialState: FavouritesState = {
	favoritos: [],
};

const favouritesSlice = createSlice({
	name: "favoritos",
	initialState,
	reducers: {
		addFavourite: (state, action: PayloadAction<Character>) => {
			state.favoritos = [...state.favoritos, action.payload];
		},
		removeFavourite: (state, action: PayloadAction<number>) => {
			state.favoritos = state.favoritos.filter((x) => x.id !== action.payload);
		},
		removeAllFavourites: (state) => {
			state.favoritos = [];
		},
	},
});

export const { addFavourite, removeFavourite, removeAllFavourites } =
	favouritesSlice.actions;
export default favouritesSlice.reducer;
