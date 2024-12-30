import { baseApi } from "../../shared/baseApi";
import { Pet } from "./Pet";

export const petsEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPets: builder.query<Pet[], { page: number; pageSize: number }>({
      query: ({ page, pageSize }) => ({
        url: "/species",
        params: { Page: page, PageSize: pageSize },
      }),
      providesTags: ["Pets"],
      transformResponse: (response: { result: { items: Pet[] } }) =>
        response.result.items,
    }),
    addPet: builder.mutation<string, { name: string }>({
      query: (data) => ({
        url: "/species",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Pets"],
    }),
  }),
  overrideExisting: false, // Set to `true` to allow overriding endpoints
});

export const { useFetchPetsQuery, useAddPetMutation } = petsEndpoints;
