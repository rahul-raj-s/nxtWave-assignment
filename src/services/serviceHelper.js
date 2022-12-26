export const getCollectionQuery = (builder, path) => {
  return builder.query({
    query: () => ({
      url: path,
      method: "get",
    }),
    keepUnusedDataFor: 2,
    providesTags: [path],
  });
};
