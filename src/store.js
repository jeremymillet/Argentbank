import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
let initialState = {
  value: null,
  login: false,
};

// Create a slice
const slice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

// Export the actions so they can be used in components
export const { setValue, setLogin } = slice.actions;

// Create the store
export const store = configureStore({
  reducer: slice.reducer,
  preloadedState: initialState,
});
