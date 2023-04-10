import { CharactersResponse } from "../../interfaces/character";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL_CHARACTER_PAGE = "https://rickandmortyapi.com/api/character/?page=";

export const getCharacterPage = createAsyncThunk<CharactersResponse, number>(
	"characters/getCharacterPage",
	async (number) => {
		const response = await fetch(URL_CHARACTER_PAGE + number);
		const data = await response.json();
		return data as CharactersResponse;
	}
);

interface GetCharacterState {
	characters: CharactersResponse | {};
	loading: boolean;
}

const CharacterSlice = createSlice({
	name: "pageCharacters",
	initialState: {
		characters: {},
		loading: false,
	} as GetCharacterState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCharacterPage.pending, (state) => {
				state.loading = true;
			})
			.addCase(getCharacterPage.fulfilled, (state, action) => {
				state.characters = action.payload;
				state.loading = false;
			})
			.addCase(getCharacterPage.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default CharacterSlice.reducer;