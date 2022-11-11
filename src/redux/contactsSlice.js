import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const extraCases = [fetchContacts, addContact, deleteContact];
const getExtraCases = type => extraCases.map(extraCase => extraCase[type]);

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getExtraCases('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getExtraCases('fulfilled')), anyFulfilledReducer)
      .addMatcher(isAnyOf(...getExtraCases('rejected')), anyRejectedReducer),
});
export const { updateFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
