import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
let initialState = {
  login: false,
  token: "",
  firstName: "",
  lastName: "",
};

// Create a slice
const slice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.login = !!action.payload 
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

// Export the actions so they can be used in components
export const {setToken,setFirstName,setLastName } = slice.actions;

// Create the store
export const store = configureStore({
  reducer: slice.reducer,
  preloadedState: initialState,
});
