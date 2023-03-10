import React from "react";
import { useGetFactQuery } from "app/api";
import { useSelector } from "react-redux";

import WeatherSummary from "components/WeatherSummary";
import { Box } from "@mui/material";
import { CurrencyConversions } from "components/CurrencyConversions";

const Dashboard = () => {
  const { data, isLoading } = useGetFactQuery();

  return (
    <Box>
      <h1>Dashboard</h1>
      <hr />
      {!isLoading && data.text}

      <Box display="grid" gridTemplateColumns=" 1fr 1fr 5fr">
        <WeatherSummary
          browserLocation={useSelector((state) => state.global.browserLocation)}
        />
        <CurrencyConversions />
      </Box>
    </Box>
  );
};

export default Dashboard;
