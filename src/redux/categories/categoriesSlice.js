// src/redux/categories/categoriesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: ['Under construction'] },
  reducers: {
    checkStatus: (state) => ({
      ...state,
      categories: ['Under construction'],
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
