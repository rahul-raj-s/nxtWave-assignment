import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createMutation, getCollectionQuery } from "./serviceHelper";

export const commonApiService = createApi({
  reducerPath: "commonApi",
  name: "commonApi",
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://media-content.ccbp.in/website/react-assignment/",
  }),
  endpoints: (builder) => ({
    getResources: getCollectionQuery(builder, "resources.json"),
  }),
});

export const { useGetResourcesQuery } =
  commonApiService;
