function init({ baseURL = BASE_URL, axiosOptions = { headers: {} } } = {}) {
  api = axios.create({
    baseURL,
    ...axiosOptions,
    withCredentials: true,
  });

  api.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem("token");
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response &&
        error.response.status === 401 &&
        !error?.config?._retry
      ) {
        localStorage.removeItem("token");
      }
      return Promise.reject(error);
    }
  );
}
