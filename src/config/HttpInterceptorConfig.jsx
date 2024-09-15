import store from "./StoreConfig";
import { logoutAction } from "./StoreActionConfig";
import { AppHttp } from "./HttpConfig";

AppHttp.interceptors.request.use((config) => {
  const { accessToken } = store.getState().global.authUser || {};

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

AppHttp.interceptors.response.use(undefined, (error) => {
  if (error?.response?.status === 401) {
    store.dispatch(logoutAction());
  }
  return Promise.reject(error);
});
