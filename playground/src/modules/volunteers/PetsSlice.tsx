import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Envelope } from "../../types/Envelope";
import { axiosInstance } from "../../services/axiosInstance";

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
  extraReducers: (builder) => {
    builder.addCase(fetchPets.pending, (state) => {
      state.isPetsLoading = "pending";
    });
    builder.addCase(
      fetchPets.fulfilled,
      (state, { payload: pets }: PayloadAction<Pet[]>) => {
        console.log("!!!");
        state.isPetsLoading = "succeded";
        state.pets = pets;
      }
    );
    builder.addCase(fetchPets.rejected, (state) => {
      console.log("???");
      state.isPetsLoading = "failed";
    });
  },
});

export default petsSlice.reducer;

export const {
  setPets,
  setPetsIsPending,
  setPetsLoadingIsFailed,
  setPetsLoadingIsSucceded,
} = petsSlice.actions;

export const fetchPets = createAsyncThunk<Pet[]>(
  "pets/fetchPets",
  // Declare the type your function argument here:
  async (_, { rejectWithValue }) => {
    const response = await axiosInstance.get(
      `http://localhost:5098/Species?Page=1&PageSize=10`
    );

    const data = response.data;
    if (response.status < 200 || response.status >= 300) {
      console.log("WHAT A FUCK!");
      return rejectWithValue(data.errors);
    }

    return data.result.items;
  }
);
