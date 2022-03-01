import { createSlice } from "@reduxjs/toolkit";
import subMenuInterface from "../interfaces/subMenu";

const initialStateValue: subMenuInterface = {
  isMenuOpen: false,
  loading: false,
  menuData: {
    mock: [],
  },
  activeMenu: "",
};

export const subMenu = createSlice({
  name: "menu",
  initialState: { value: initialStateValue },
  reducers: {
    setMenuStatus: (state, action) => {
      state.value.isMenuOpen = action.payload.isMenuOpen;
    },
    setLoading: (state, action) => {
      state.value.loading = action.payload.loading;
    },
    addData: (state, action) => {
      state.value.menuData[action.payload.id] = action.payload.data;
    },
    setActiveMenu: (state, action) => {
      state.value.activeMenu = action.payload.id;
      state.value.loading = false;
    },
    closeMenu: (state) => {
      state.value.isMenuOpen = false;
      state.value.activeMenu = "";
    },
  },
});

export const { setMenuStatus, setLoading, addData, setActiveMenu, closeMenu } =
  subMenu.actions;
export default subMenu.reducer;
