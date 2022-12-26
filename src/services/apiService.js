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
    createResource: getCollectionQuery(builder, "add_resource.json"), // This was expected to a post method but api is not a post
  }),
});

export const { useGetResourcesQuery, useCreateResourceQuery } =
  commonApiService;
