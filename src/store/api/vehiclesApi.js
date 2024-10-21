// services/vehicleApi.js
import api from "./api"; // Import the configured API instance

export const vehicleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVehicles: builder.query({
      query: () => "cars",
    }),

    getLatestVehicles: builder.query({
      query: () => "cars/latest",
    }),

    getVehicleById: builder.query({
      query: (vehicleId) => `cars/${vehicleId}`,
    }),

    addVehicle: builder.mutation({
      query: (data) => ({
        url: "vehicle/addVehicle",
        method: "POST",
        body: data,
      }),
    }),

    deleteVehicle: builder.mutation({
      query: (vehicleId) => ({
        url: `vehicle/deleteVehicle/${vehicleId}`,
        method: "DELETE",
      }),
    }),

    getVehiclesWithPagination: builder.query({
      query: (page = 1) => `cars/pagination?page=${page}`,
    }),

    getBrands: builder.query({
      query: () => "brands",
    }),

    getVehiclesByBrand: builder.query({
      query: (brandId, page = 1) =>
        `cars/paginationBrand/${brandId}?page=${page}`,
    }),
  }),
});

export const {
  useGetLatestVehiclesQuery,
  useGetVehicleByIdQuery,
  useAddVehicleMutation,
  useDeleteVehicleMutation,
  useGetVehiclesWithPaginationQuery,
  useGetAllVehiclesQuery,
  useGetBrandsQuery,
  useGetVehiclesByBrandQuery,
} = vehicleApi;
