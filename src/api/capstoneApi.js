import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const capstoneApi = createApi({
  reducerPath: "capstoneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/api/products" }),
    getProduct: builder.query({ query: (id) => `/api/products/${id}` }),
    getUsers: builder.query({ query: () => "/auth/users" }),
    getUser: builder.query({ query: (id) => `auth/users/${id}` }),
    updateProduct: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/products/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
    addProduct: builder.mutation({
      query: (productData) => ({
        url: "/api/products",
        method: "POST",
        body: productData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/auth/users/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/users/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/users/login",
        method: "POST",
        body: userData,
      }),
    }),
    logOutUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/users/logout",
        method: "DELETE",
        body: userData,
      }),
    }),
    addToCart: builder.mutation({
      query: ({ userId, productId, quantity }) => ({
        url: `/auth/users/${userId}/cart`,
        method: "POST",
        body: { productId, quantity },
      }),
    }),
    removeFromCart: builder.mutation({
      query: ({ userId, cartItemId }) => ({
        url: `/auth/users/${userId}/cart/${cartItemId}`,
        method: "DELETE",
      }),
    }),
    getCartItems: builder.query({
      query: (userId) => `/auth/users/${userId}/cart`,
    }),
    savePlayerInfo: builder.mutation({
      query: (playerData) => ({
        url: "/auth/saves",
        method: "POST",
        body: playerData,
      }),
    }),
    saveMonsterInfo: builder.mutation({
      query: (monsterData) => ({
        url: "/auth/saves/monster-saves",
        method: "POST",
        body: monsterData,
      }),
    }),
    saveRandomName: builder.mutation({
      query: (randomNameData) => ({
        url: "/auth/saves/random-name-saves",
        method: "POST",
        body: randomNameData,
      }),
    }),
    saveTreasureInfo: builder.mutation({
      query: (treasureData) => ({
        url: "/auth/saves/treasure-saves",
        method: "POST",
        body: treasureData,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateProductMutation,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateUserMutation,
  useAddUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartItemsQuery,
  useSavePlayerInfoMutation,
  useSaveMonsterInfoMutation,
  useSaveRandomNameMutation,
  useSaveTreasureInfoMutation,
} = capstoneApi;
