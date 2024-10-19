import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  isOpen: boolean;
}

const initialState: IProps = {
  isOpen: false,
};

const cartModalSlice = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = cartModalSlice.actions;
export default cartModalSlice.reducer;
