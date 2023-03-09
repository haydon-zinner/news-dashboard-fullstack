import WeatherItem from "./WeatherItem";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeatherForecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  const listCopy = [...data.list];
  const splicedItems = listCopy.splice(0, 7);
  const city = useSelector((state) => state.global.browserLocation);

  return (
    <>
      <Typography textTransform="capitalize" variant="h4">
        {city}
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)">
        {splicedItems.map((item, idx) => (
          <WeatherItem
            key={idx}
            icon={item.weather[0].icon}
            description={item.weather[0].description}
            temp_min={Math.round(item.main.temp_min)}
            temp_max={Math.round(item.main.temp_max)}
            pressure={item.main.pressure}
            humidity={item.main.humidity}
            clouds={item.clouds.all}
            speed={item.wind.speed}
            sea_level={item.main.sea_level}
            feels_like={Math.round(item.main.feels_like)}
            dayOfWeek={forecastDays[idx]}
          />
        ))}
      </Box>
    </>
  );
};

export default WeatherForecast;
