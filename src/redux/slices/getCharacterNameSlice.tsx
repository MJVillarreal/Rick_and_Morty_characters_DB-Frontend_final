import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CharactersResponse } from "../../interfaces/character";

const URL_CHARACTER_NAME = "https://rickandmortyapi.com/api/character/?name=";

interface NamePage {
	name: string;
	page: number;
}

export const getCharacterName = createAsyncThunk<CharactersResponse, NamePage>(
	"characters/getCharacterName",
	async (namePage, thunkAPI) => {
		try {
			const response = await fetch(
				URL_CHARACTER_NAME + namePage.name + "&page=" + namePage.page
			);
			const data = await response.json();
			return data as CharactersResponse;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

interface GetCharacterNameState {
	characterName: CharactersResponse | null;
	processing: boolean;
}

const getCharacterNameSlice = createSlice({
	name: "nameCharacters",
	initialState: {
		characterName: {},
		processing: false,
	} as GetCharacterNameState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCharacterName.pending, (state) => {
				state.processing = true;
			})
			.addCase(getCharacterName.fulfilled, (state, action) => {
				state.characterName = action.payload;
				state.processing = false;
			})
			.addCase(getCharacterName.rejected, (state, action) => {
				state.processing = false;
			});
	},
});

export default getCharacterNameSlice.reducer;