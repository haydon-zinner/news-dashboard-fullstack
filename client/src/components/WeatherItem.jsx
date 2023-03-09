import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const WeatherItem = ({
  icon,
  description,
  temp_min,
  temp_max,
  pressure,
  humidity,
  clouds,
  speed,
  sea_level,
  feels_like,
  dayOfWeek,
}) => {
  const theme = useTheme();
  const borderColor = theme.palette.background.paper;
  return (
    <Box
      m="20px"
      border={`2px solid ${borderColor}`}
      borderRadius="5px"
      p="20px"
      width="200px"
    >
      <Typography variant="h5">{dayOfWeek}</Typography>
      <Box
        component="img"
        alt="icon-small"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      ></Box>
      <Typography textTransform="capitalize">{description}</Typography>
      <Typography>
        {temp_min} °C / {temp_max} °C
      </Typography>
      <hr />
      <Typography>Pressure: {pressure} hPa</Typography>
      <Typography>Humidity: {humidity}%</Typography>
      <Typography>Clouds: {clouds}%</Typography>
      <Typography>Wind Speed: {speed} m/s</Typography>
      <Typography>Sea Level: {sea_level}</Typography>
      <Typography>Feels Like: {feels_like} °C</Typography>
    </Box>
  );
};

export default WeatherItem;
