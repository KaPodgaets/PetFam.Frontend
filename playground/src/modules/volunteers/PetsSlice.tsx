import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PetId = string;
export type Pet = {
  id: PetId;
  name: string;
};

export type PetsState = {
  pets: Pet[];
  isPetsLoading: "idle" | "pending" | "succeded" | "failed";
};

const initialState: PetsState = {
  pets: [
    { id: "alkjdslkfjalskdf", name: "Tuzik" } as Pet,
    { id: "lakjdslkjal", name: "Murzik" } as Pet,
  ],
  isPetsLoading: "idle",
};

export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPets: (state, { payload: pets }: PayloadAction<Pet[]>) => {
      state.pets = pets;
    },
    setPetsIsPending: (state) => {
      state.isPetsLoading = "pending";
    },
    setPetsLoadingIsFailed: (state) => {
      state.isPetsLoading = "failed";
    },
    setPetsLoadingIsSucceded: (state) => {
      state.isPetsLoading = "succeded";
    },
  },
});

export default petsSlice.reducer;

export const {
  setPets,
  setPetsIsPending,
  setPetsLoadingIsFailed,
  setPetsLoadingIsSucceded,
} = petsSlice.actions;
