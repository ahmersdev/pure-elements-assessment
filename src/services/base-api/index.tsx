import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config";

// Tags
export const TAGS = ["PRODUCTS_LIST"];

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
