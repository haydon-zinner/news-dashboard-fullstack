import React, { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themeSettings } from "app/theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Dashboard from "features/Dashboard";
import News from "features/News";
import Weather from "features/Weather";
import MuiSider from "features/MuiSider";

import { setBrowserLocation } from "app/state";
const VisitorAPI = require("visitorapi");

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const dispatch = useDispatch();

  //Set user's location based on browser
  VisitorAPI(process.env.REACT_APP_VISITOR_API, (data) => {
    dispatch(setBrowserLocation(data.city || null));
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MuiSider />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news" element={<News />} />
            <Route path="/weather" element={<Weather />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
