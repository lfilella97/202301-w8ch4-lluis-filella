import { createSlice, PayloadActionCreator } from "@reduxjs/toolkit";

interface CalculatorState {
  previousOperation: string;
  total: string;
}

const initialClaculatorState: CalculatorState = {
  previousOperation: "",
  total: "0",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialClaculatorState,
  reducers: {
    resetCalculator: (
      currentCalculatorState: CalculatorState
    ): CalculatorState => ({ ...initialClaculatorState }),
  },
});

export const { resetCalculator: resetCalculatorActionCreator } =
  calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
