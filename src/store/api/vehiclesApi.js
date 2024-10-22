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

    addInquiry: builder.mutation({
      query: (data) => ({
        url: "inquiries/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetLatestVehiclesQuery,
  useGetVehicleByIdQuery,
  useGetVehiclesWithPaginationQuery,
  useGetAllVehiclesQuery,
  useGetBrandsQuery,
  useGetVehiclesByBrandQuery,
  useAddInquiryMutation,
} = vehicleApi;
