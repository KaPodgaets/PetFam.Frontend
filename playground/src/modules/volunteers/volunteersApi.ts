import { api } from "../../shared/baseApi";

export const petsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchPets: builder.query({
      query: () => "Species?Page=1&PageSize=10",
    }),
    addPet: builder.mutation({
      query: (newPet) => ({
        url: "Pets",
        method: "POST",
        body: newPet,
      }),
    }),
    deletePet: builder.mutation({
      query: (petId) => ({
        url: `Pets/${petId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false, // Set to `true` to allow overriding endpoints
});

export const { useFetchPetsQuery, useAddPetMutation, useDeletePetMutation } =
  petsEndpoints;
