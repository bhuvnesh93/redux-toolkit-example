import { createSlice } from '@reduxjs/toolkit';

/**
 * Save Data
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */
const saveDataReducer = (state, action) => {
  const { personList } = state;
  personList.push(action.payload);
  state.personList = personList;
};

const deleteItemReducer = (state, action) => {
  const { personList } = state;
  personList.splice(action.payload, 1);
  state.personList = personList;
};

const editDataReducer = (state, action) => {
  const { data, index } = action.payload;
  const { personList } = state;
  personList[index] = data;
  state.personList = personList;
};

// REDUCER
const personSlice = createSlice({
  name: 'person',
  initialState: {
    personList: [],
  },
  reducers: {
    saveData: saveDataReducer,
    deleteItem: deleteItemReducer,
    editData: editDataReducer,
  },
});

// ACTIONS
const { saveData, deleteItem, editData } = personSlice.actions;

// SELECTOR
const selectPersonList = ({ person }) => person.personList;

const personSliceReducer = personSlice.reducer;

export { selectPersonList, saveData, personSliceReducer, deleteItem, editData };
