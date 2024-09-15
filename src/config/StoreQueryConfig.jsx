import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AppHttp } from "./HttpConfig";
import { StoreQueryTagEnum } from "../constants/storeConstants";

export const AppApi = createApi({
  reducerPath: "app",
  baseQuery: axiosBaseQuery({}, AppHttp),
  tagTypes: [
    "USER_CREATE_ACCOUNT",
    "USER_CREATE_ACCOUNT_OTP",
    "PROFILE_SETUP",
    "USER_PREFERENCE",
    "CHECK_USERNAME_AVAILABILITY",
    "FOLLOW_AND_UNFOLLOW_USER",
    "SEARCH_USER",
    "CREATE_POST",
    "RE_POST",
    "QUOTE_POST",
    "LIKE_POST",
  ],
  endpoints: (builder) => ({
    // Auth Mutations APIs
    createUserAccount: builder.mutation({
      query: (config) => ({
        url: "/api/v1/User/SignIn?type=email",
        method: "post",
        ...config,
      }),
      invalidatesTags: ["USER_CREATE_ACCOUNT"],
    }),
    createUserAccountOTP: builder.mutation({
      query: (config) => ({
        url: "/api/v1/User/Verify",
        method: "post",
        ...config,
      }),
      invalidatesTags: ["USER_CREATE_ACCOUNT_OTP"],
    }),

    // Profile Mutations APIs
    profileSetup: builder.mutation({
      query: (config) => ({
        url: "/api/v1/User/Profile/UpdateProfile",
        method: "patch",
        ...config,
      }),
      invalidatesTags: ["PROFILE_SETUP"],
    }),
    userPreference: builder.mutation({
      query: (config) => ({
        url: "/api/v1/User/Profile/UpdatePersona",
        method: "patch",
        ...config,
      }),
      invalidatesTags: ["USER_PREFERENCE"],
    }),
    checkUsernameAvailability: builder.mutation({
      query: (config) => ({
        url: "/api/v1/User/Profile/CheckUsername",
        method: "post",
        ...config,
      }),
      invalidatesTags: ["CHECK_USERNAME_AVAILABILITY"],
    }),
    followAndUnfollowUser: builder.mutation({
      query: ({ userId, ...config }) => ({
        url: `/api/v1/user/FollowAndUnfollowUser/${userId}`,
        method: "post",
        ...config,
      }),
      invalidatesTags: ["FOLLOW_AND_UNFOLLOW_USER"],
    }),
    searchUser: builder.mutation({
      query: (config) => ({
        url: "/api/v1/User/Profile/SearchUser",
        method: "post",
        ...config,
      }),
      invalidatesTags: ["SEARCH_USER"],
    }),
    getListOfUserProfilesRequest: builder.query({
      query: (config) => ({
        url: `/api/v1/User/Profile/GetListOfUsersProfiles?page=1`,
        method: "get",
        ...config,
      }),
      providesTags: [
        "USER_CREATE_ACCOUNT",
        "USER_CREATE_ACCOUNT_OTP",
        "PROFILE_SETUP",
        "USER_PREFERENCE",
        "FOLLOW_AND_UNFOLLOW_USER",
        "SEARCH_USER",
      ],
    }),

    // Post Mutations APIs
    createPost: builder.mutation({
      query: (config) => ({
        url: "/api/v1/Post/CreatePost",
        method: "post",
        ...config,
      }),
      invalidatesTags: ["CREATE_POST"],
    }),
    getSinglePost: builder.query({
      query: ({ postId, ...config }) => ({
        url: `/api/v1/Post/GetPost/${postId}`,
        method: "get",
        ...config,
      }),
      providesTags: ["CREATE_POST", "RE_POST", "QUOTE_POST", "LIKE_POST"],
    }),
    rePost: builder.mutation({
      query: ({ postId, ...config }) => ({
        url: `/api/v1/Post/RePost/${postId}`,
        method: "put",
        ...config,
      }),
      invalidatesTags: ["RE_POST"],
    }),
    quotePost: builder.mutation({
      query: ({ postId, ...config }) => ({
        url: `/api/v1/Post/QuotePost/${postId}`,
        method: "post",
        ...config,
      }),
      invalidatesTags: ["QUOTE_POST"],
    }),
    likePost: builder.mutation({
      query: ({ postId, ...config }) => ({
        url: `/api/v1/Post/LikePost/${postId}`,
        method: "put",
        ...config,
      }),
      invalidatesTags: ["LIKE_POST"],
    }),
    getAllPost: builder.query({
      query: (config) => ({
        url: "/api/v1/Post/GetPostFeeds?page=1",
        method: "get",
        ...config,
      }),
      providesTags: ["CREATE_POST", "RE_POST", "QUOTE_POST", "LIKE_POST"],
    }),

    // User Mutation API
    getUserProfile: builder.query({
      query: ({ userId, ...config }) => ({
        url: `/api/v1/User/Profile/GetPublicProfile/${userId}`,
        method: "get",
        ...config,
      }),
      providesTags: [
        "USER_CREATE_ACCOUNT",
        "USER_CREATE_ACCOUNT_OTP",
        "PROFILE_SETUP",
        "USER_PREFERENCE",
        "FOLLOW_AND_UNFOLLOW_USER",
        "CREATE_POST",
        "RE_POST",
        "QUOTE_POST",
        "LIKE_POST",
      ],
    }),
    getUserRecentPosts: builder.query({
      query: (config) => ({
        url: "/api/v1/Post/GetUserRecentPosts?page=1",
        method: "get",
        ...config,
      }),
      providesTags: [
        "USER_CREATE_ACCOUNT",
        "USER_CREATE_ACCOUNT_OTP",
        "PROFILE_SETUP",
        "USER_PREFERENCE",
        "FOLLOW_AND_UNFOLLOW_USER",
        "CREATE_POST",
        "RE_POST",
        "QUOTE_POST",
        "LIKE_POST",
      ],
    }),
  }),
});

[AppApi].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(StoreQueryTagEnum) });
});

/**
 *
 * @param {import("axios").AxiosRequestConfig} baseConfig
 */
export function axiosBaseQuery(baseConfig = {}, http = axios) {
  return request;

  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   */
  async function request(config = {}) {
    const url = config.url
      ? (baseConfig.url || "") + config.url
      : baseConfig.url;
    try {
      const response = await http.request({
        ...baseConfig,
        ...config,
        url,
      });

      return {
        ...response,
        data: response.data,
        message: response.data?.message || null,
        status: response.status || 200,
        meta: { request: response.request, response },
      };
    } catch (error) {
      // console.log(data);

      console.log(error);
      return {
        error: error.response
          ? {
              message: error.response.data?.error,
              status: error.response.status,
              data: error.response.data,
            }
          : {
              message: "Something went wrong",
              data: { message: "Something went wrong" },
            },
      };
    }
  }
}
