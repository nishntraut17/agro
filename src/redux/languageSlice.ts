import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILanguageState {
    language: string;
}

const initialState: ILanguageState = {
    language: "English",
};

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
