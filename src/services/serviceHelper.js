const pathWithQuery = (path, queryParams) => {
  let finalPath = `${path}`;
  if (queryParams) {
    finalPath = `${finalPath}?`;
    for (const property in queryParams) {
      finalPath = `${finalPath}${property}=${queryParams[property]}&`;
    }
  }
  return finalPath;
};


export const createMutation = (builder, path) => {
  return builder.mutation({
    query: (queryParams) => ({
      url: path,
      method: "post",
      body: queryParams.formData,
    }),
    invalidatesTags: (result, error, id) => {
      if (!error) {
        return [path];
      }
    },
  });
};

export const getCollectionQuery = (builder, path) => {
  return builder.query({
    query: (queryParams) => ({
      url: pathWithQuery(path, queryParams),
      method: "get",
    }),
    keepUnusedDataFor: 2,
    providesTags: [path],
  });
};
