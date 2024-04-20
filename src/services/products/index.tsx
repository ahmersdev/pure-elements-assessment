import { END_POINTS } from "../../constants/endpoints";
import { baseAPI } from "../base-api";

const TAG = "PRODUCTS_LIST";

export const productsAPI: any = baseAPI?.injectEndpoints({
  endpoints: (builder: any) => ({
    getProductsList: builder?.query({
      query: (params: any) => ({
        url: `${END_POINTS?.PRODUCTS_LIST}`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
  }),
});

export const { useGetProductsListQuery } = productsAPI;
