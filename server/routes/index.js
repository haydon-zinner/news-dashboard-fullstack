import express from "express";
import { getTodayFact, getNews, getWeatherSummary, getWeather7DayForecast, getCurrency } from "../controllers/index.js";

const router = express.Router();

router.get("/fact", getTodayFact);
router.get("/news", getNews);
router.get("/weather/summary", getWeatherSummary);
router.get("/weather/7dayforecast", getWeather7DayForecast);
router.get("/currency", getCurrency);



export default router;
