import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../Types";

export const defaultUser: userType = {
  id: "",
  username: "",
  email: "",
  isOnline: false,
  img: "",
  bio: "",
  creationTime: "",
  lastSeen: "",
};

const initialState = {
  currentUser: defaultUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      // set user in local storage
      localStorage.setItem("user", JSON.stringify(user));
      // set logged in user
      state.currentUser = user;
    },
    setUsers: (state, action) => {
      // set all users
    },
  },
});
export const { setUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
