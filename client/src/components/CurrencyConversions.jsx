import React from "react";
import { useGetCurrencyQuery } from "app/api";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export const CurrencyConversions = () => {
  const { data, isLoading } = useGetCurrencyQuery();
  const theme = useTheme();
  const borderColor = theme.palette.background.paper;

  if (!isLoading && data) {
    return (
      <Box       m="20px"
      border={`2px solid ${borderColor}`}
      borderRadius="5px"
      p="20px"
      width="200px">
        <Typography>AUD$1.00 is worth</Typography>
        <hr />
        {Object.entries(data.rates).map(([key, value]) => (
          <Typography key={key}>
            {value.toLocaleString(key, { style: "currency", currency: key })}
          </Typography>
        ))}
      </Box>
    );
  }

  return <>Loading...</>;
};
