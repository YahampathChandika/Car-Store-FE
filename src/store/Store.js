import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import { vehicleApi } from "./api/vehiclesApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      api.middleware,
      vehicleApi.middleware
    );
  },
});
