// services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Initialize an API service without authentication logic
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4003/', 
  }),
  endpoints: () => ({}), // Empty endpoints to be injected later
});

export default api;
