import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Fact", "News", "Weather", "Currency"],
  endpoints: (build) => ({
    getFact: build.query({
      query: () => `api/fact`,
      providesTags: ["Fact"],
    }),
    getNews: build.query({
      query: () => `api/news`,
      providesTags: ["News"],
    }),
    getWeatherSummary: build.query({
      query: ({ city }) => ({
        url: `api/weather/summary`,
        method: "GET",
        params: { city },
      }),
      providesTags: ["Weather"],
    }),
    getWeather7DayForecast: build.query({
      query: ({ city }) => ({
        url: `api/weather/7dayforecast`,
        method: "GET",
        params: { city },
      }),
      providesTags: ["Weather"],
    }),
    getCurrency: build.query({
        query: () => `api/currency`,
        providesTags: ["Currency"],
      }),
  }),
});

export const { useGetFactQuery, useGetNewsQuery, useGetWeatherSummaryQuery, useGetWeather7DayForecastQuery, useGetCurrencyQuery } = api;
