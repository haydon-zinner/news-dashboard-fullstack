import React from "react";
import { useGetWeatherSummaryQuery } from "app/api";
import WeatherItem from "./WeatherItem";

const WeatherSummary = ({ browserLocation }) => {
  const { data, isLoading } = useGetWeatherSummaryQuery({
    city: browserLocation,
  });

  return (
    <div>
      {!isLoading && data ? (
        <WeatherItem
          key={`today`}
          icon={data.weather[0].icon}
          description={data.weather[0].description}
          temp_min={Math.round(data.main.temp_min)}
          temp_max={Math.round(data.main.temp_max)}
          pressure={data.main.pressure}
          humidity={data.main.humidity}
          clouds={data.clouds.all}
          speed={data.wind.speed}
          sea_level={data.main.sea_level}
          feels_like={data.main.feels_like}
          dayOfWeek={"Today"}
        />
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default WeatherSummary;
