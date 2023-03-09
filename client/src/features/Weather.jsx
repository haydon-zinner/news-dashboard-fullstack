import React from "react";
import { useGetWeather7DayForecastQuery } from "app/api";
import WeatherForecast from "components/WeatherForecast";
import { useSelector } from "react-redux";

const Weather = () => {
  const city = useSelector((state) => state.global.browserLocation);

  const { data, isLoading } = useGetWeather7DayForecastQuery({
    city,
  });


  return (
    <>
      {!isLoading && data ? <WeatherForecast data={data} /> : <>Loading...</>}
    </>
  );
};

export default Weather;
