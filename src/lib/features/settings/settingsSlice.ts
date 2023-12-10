import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ISettingsState = {
  currentTheme: string;
};

const initialState: ISettingsState = {
  currentTheme: "dark",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
