import { createSlice } from "@reduxjs/toolkit";
import { logoutAction } from "./StoreActionConfig";
import { AppApi } from "./StoreQueryConfig";

export const globalInitialState = {
  authUser: null,
};

const slice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    toggleLoadingModalAction: (state, { payload }) => {
      state.isLoadingModal =
        payload !== undefined ? !!payload : !state.isLoadingModal;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logoutAction, () => ({ ...globalInitialState }))
      .addMatcher(
        AppApi.endpoints.createUserAccount.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...state.authUser,
            ...payload?.data,
          };
        }
      )
      .addMatcher(
        AppApi.endpoints.createUserAccountOTP.matchFulfilled,
        (state, { payload }) => {
          state.authUser.accessToken = payload?.data?.accessToken;
        }
      ),
});

export const { toggleLoadingModalAction, toggleSideMenuAction, setFeeds } =
  slice.actions;

export default slice;

export function getGlobalSliceStorageState({ authUser }) {
  return { authUser };
}
