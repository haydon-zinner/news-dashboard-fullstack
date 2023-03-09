import React, { useState, useEffect } from "react";
import { useGetFactQuery } from "app/api";
import { useDispatch, useSelector } from "react-redux";
import { setBrowserLocation } from "app/state";
import WeatherSummary from "components/WeatherSummary";
import { Box } from "@mui/material";
import { CurrencyConversions } from "components/CurrencyConversions";
const VisitorAPI = require("visitorapi");

const Dashboard = () => {
  const { data, isLoading } = useGetFactQuery();
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  //find and set the city locaiton
  useEffect(() => {
    VisitorAPI(process.env.REACT_APP_VISITOR_API, (data) => {
      setCity(data.city);
      dispatch(setBrowserLocation(data.city || null));
    });
  }, [setCity, dispatch]);

  return (
    <Box>
      <h1>Dashboard</h1>
      <hr />
      {!isLoading && data.text}

      <Box display="grid" gridTemplateColumns=" 1fr 1fr 5fr">
        <WeatherSummary
          browserLocation={
            useSelector((state) => state.global.browserLocation) || city
          }
        />
        <CurrencyConversions />
      </Box>
    </Box>
  );
};

export default Dashboard;
