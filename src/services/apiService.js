import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createMutation, getCollectionQuery } from "./serviceHelper";

export const commonApiService = createApi({
  reducerPath: "commonApi",
  name: "commonApi",
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://media-content.ccbp.in/website/react-assignment/",
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set("Access-Control-Allow-Origin", "*");
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getResources: getCollectionQuery(builder, "resources.json"),
    createResource: createMutation(builder, "add_resource.json"),
  }),
});

export const { useGetResourcesQuery, useCreateResourceMutation } =
  commonApiService;
