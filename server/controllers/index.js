import fetch from "node-fetch";

export const getTodayFact = async (req, res) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const api = `http://numbersapi.com/${month}/${day}/date?json`;
  await fetch(api)
    .then((response) => response.json())
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.status(400).json({ message: error.message }));
};

export const getNews = async (req, res) => {
  const date = new Date();
  const today = date.toISOString();
  const sevenDaysAgo = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const last7 = sevenDaysAgo.toISOString();

  //End Point 2: /v2/top-headlines
  //Top Headlines in AUS: https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=${process.env.NEWS_API}
  //   const newsApi = {
  //     business: `https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=${process.env.NEWS_API}`,
  //     health: `https://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=${process.env.NEWS_API}`,
  //     science: `https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=${process.env.NEWS_API}`,
  //     general: `https://newsapi.org/v2/top-headlines?country=au&category=general&apiKey=${process.env.NEWS_API}`,
  //     sports: `https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=${process.env.NEWS_API}`,
  //     technology: `https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=${process.env.NEWS_API}`,
  //     entertainment: `https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=${process.env.NEWS_API}`,
  //   };

  //End Point 1: /v2/everything
  const newsApi = {
    business: `https://newsapi.org/v2/everything?q=business&sortyBy=popularity&from=${last7}&to=${today}&pageSize=10&page=1&language=en&apiKey=${process.env.NEWS_API}`,
    health: `https://newsapi.org/v2/everything?q=health&sortyBy=popularity&from=${last7}&to=${today}&pageSize=10&page=1&language=en&apiKey=${process.env.NEWS_API}`,
    science: `https://newsapi.org/v2/everything?q=science&sortyBy=popularity&from=${last7}&to=${today}&pageSize=10&page=1&language=en&apiKey=${process.env.NEWS_API}`,
    sports: `https://newsapi.org/v2/everything?q=sports&sortyBy=popularity&from=${last7}&to=${today}&pageSize=10&page=1&language=en&apiKey=${process.env.NEWS_API}`,
    technology: `https://newsapi.org/v2/everything?q=technology&sortyBy=popularity&from=${last7}&to=${today}&pageSize=10&page=1&language=en&apiKey=${process.env.NEWS_API}`,
    entertainment: `https://newsapi.org/v2/everything?q=entertainment&sortyBy=popularity&from=${last7}&to=${today}&pageSize=10&page=1&language=en&apiKey=${process.env.NEWS_API}`,
  };

  const totalNews = {};
  Promise.all(
    Object.keys(newsApi).map((key) =>
      fetch(newsApi[key])
        .then((response) => response.json())
        .then((response) => (totalNews[key] = response || ""))
        .catch((error) => {
          throw new Error(error.message);
        })
    )
  )
    .then(() => {
      res.send(totalNews);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};

export const getWeatherSummary = async (req, res) => {
  const { city } = req.query;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API}`;
  await fetch(api)
    .then((response) => response.json())
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.status(400).json({ message: error.message }));
};

export const getWeather7DayForecast = async (req, res) => {
  const { city } = req.query;
  const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.WEATHER_API}`;
  await fetch(api)
    .then((response) => response.json())
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.status(400).json({ message: error.message }));
};

export const getCurrency = async (req, res) => {const headers = new Headers();
    headers.append("apikey", process.env.EXCHANGE_RATES_API);
    
    const requestOptions = { method: "GET", headers: headers };
    
    await fetch(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=JPY%2CUSD%2CGBP%2CEUR%2CCAD&base=AUD",
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        res.send(response);
      })
      .catch((error) => res.status(400).json({ message: error.message }));};

