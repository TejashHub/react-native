export default ({ config }) => {
  return {
    ...config,
    extra: {
      APPWRITE_ENDPOINT: "https://cloud.appwrite.io/v1",
      APPWRITE_PROJECTID: "67948f890033c3bb127b",
    },
  };
};
