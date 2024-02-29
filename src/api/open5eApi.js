import { createAsyncThunk } from '@reduxjs/toolkit';

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

// Define selectors
export const selectMonsters = (state) => state.open5eApi.monsters;
export const selectSpells = (state) => state.open5eApi.spells;
export const selectEquipment = (state) => state.open5eApi.equipment;
export const selectRaces = (state) => state.open5eApi.races;
export const selectClasses = (state) => state.open5eApi.classes;
// Add selectors for other data

export default {
  fetchMonsters,
  fetchSpells,
  fetchEquipment,
  fetchRaces,
  fetchClasses,
  // Add other async thunk action creators
  selectMonsters,
  selectSpells,
  selectEquipment,
  selectRaces,
  selectClasses,
  // Add selectors for other data
};
