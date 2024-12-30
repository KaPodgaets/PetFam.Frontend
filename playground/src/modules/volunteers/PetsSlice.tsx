import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export default petsSlice.reducer;
