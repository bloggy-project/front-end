const queryClientOption = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
      retry: false,
    },
  },
};

export default queryClientOption;
