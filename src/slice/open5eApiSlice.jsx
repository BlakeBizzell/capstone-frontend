import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.open5e.com';

// Async thunk action creators for fetching data from the Open5e API
export const fetchMonsters = createAsyncThunk('open5eApi/fetchMonsters', async () => {
  const response = await fetch(`${BASE_URL}/monsters/`);
  if (!response.ok) {
    throw new Error('Failed to fetch monsters from the Open5e API');
  }
  const data = await response.json();
  return data.results;
});

export const fetchSpells = createAsyncThunk('open5eApi/fetchSpells', async () => {
  const response = await fetch(`${BASE_URL}/spells/`);
  if (!response.ok) {
    throw new Error('Failed to fetch spells from the Open5e API');
  }
  const data = await response.json();
  return data.results;
});

export const fetchEquipment = createAsyncThunk('open5eApi/fetchEquipment', async () => {
  const response = await fetch(`${BASE_URL}/equipment/`);
  if (!response.ok) {
    throw new Error('Failed to fetch equipment from the Open5e API');
  }
  const data = await response.json();
  return data.results;
});

export const fetchRaces = createAsyncThunk('open5eApi/fetchRaces', async () => {
  const response = await fetch(`${BASE_URL}/races/`);
  if (!response.ok) {
    throw new Error('Failed to fetch races from the Open5e API');
  }
  const data = await response.json();
  return data.results;
});

export const fetchClasses = createAsyncThunk('open5eApi/fetchClasses', async () => {
  const response = await fetch(`${BASE_URL}/classes/`);
  if (!response.ok) {
    throw new Error('Failed to fetch classes from the Open5e API');
  }
  const data = await response.json();
  return data.results;
});

// Define the slice
const open5eApiSlice = createSlice({
  name: 'open5eApi',
  initialState: {
    monsters: [],
    spells: [],
    equipment: [],
    races: [],
    classes: [],
    // Define initial state for other data
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonsters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMonsters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.monsters = action.payload;
      })
      .addCase(fetchMonsters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSpells.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSpells.fulfilled, (state, action) => {
        state.isLoading = false;
        state.spells = action.payload;
      })
      .addCase(fetchSpells.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEquipment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.equipment = action.payload;
      })
      .addCase(fetchEquipment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRaces.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.races = action.payload;
      })
      .addCase(fetchRaces.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchClasses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectMonsters = (state) => state.open5eApi.monsters;
export const selectSpells = (state) => state.open5eApi.spells;
export const selectEquipment = (state) => state.open5eApi.equipment;
export const selectRaces = (state) => state.open5eApi.races;
export const selectClasses = (state) => state.open5eApi.classes;
// Add selectors for other data

export default open5eApiSlice.reducer;
