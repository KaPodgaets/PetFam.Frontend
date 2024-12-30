import { baseApi } from "../../shared/baseApi";
import { Pet } from "./PetsSlice";

export const petsEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPets: builder.query<Pet[], { page: number; pageSize: number }>({
      query: ({ page, pageSize }) => ({
        url: "/species",
        params: { Page: page, PageSize: pageSize },
      }),
      transformResponse: (response: { result: { items: Pet[] } }) =>
        response.result.items,
    }),
  }),
  overrideExisting: false, // Set to `true` to allow overriding endpoints
});

export const { useFetchPetsQuery } = petsEndpoints;
