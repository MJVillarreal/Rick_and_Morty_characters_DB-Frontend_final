import { configureStore} from "@reduxjs/toolkit";
import characterReducer from "../slices/characterSlice"
import pageReducer from "../slices/pagesSlice"
import getCharacterNameReducer from "../slices/getCharacterNameSlice"
import  favouritesReducer from "../slices/favouritesSlice"

const store = configureStore({
   reducer: {
		character: characterReducer,
		page: pageReducer,
		getCharacterName: getCharacterNameReducer,
		favourites: favouritesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;