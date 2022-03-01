import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: string = "sensor";

export const deviceType = createSlice({
  name: "deviceType",
  initialState: { value: initialStateValue },
  reducers: {
    setDeviceType: (state) => {
      let isMobile: boolean =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      state.value = isMobile ? "sensor" : "mouse";
    },
  },
});

export const { setDeviceType } = deviceType.actions;
export default deviceType.reducer;
