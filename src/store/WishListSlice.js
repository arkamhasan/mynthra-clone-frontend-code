import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
export const wishListAction = wishListSlice.actions;

export default wishListSlice;
