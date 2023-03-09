import React from "react";
import NewsArticle from "components/NewsArticle";
import { useGetNewsQuery } from "app/api";
import { Box, Typography } from "@mui/material";

const News = () => {
  const { data, isLoading } = useGetNewsQuery();

  return (
    <Box>
      {data || !isLoading ? (
        <>
          {/* health section */}
          <Typography variant="h4" mb="10px">
            Health
          </Typography>
          <hr />
          <Box
            width="100%"
            display="grid"
            gap="16px"
            gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            gridAutoFlow="column"
            gridAutoColumns="minmax(400px, 1fr)"
            sx={{ overflowX: "auto" }}
          >
            {data.health.articles.map((article, index) => {
              const {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              } = article;
              const extractedData = {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              };

              return <NewsArticle key={`health${index}`} {...extractedData} />;
            })}
          </Box>

          {/* Technology section */}

          <Typography variant="h4" mb="10px">
            Technology
          </Typography>
          <hr />
          <Box
            width="100%"
            display="grid"
            gap="16px"
            gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            gridAutoFlow="column"
            gridAutoColumns="minmax(400px, 1fr)"
            sx={{ overflowX: "auto" }}
          >
            {data.technology.articles.map((article, index) => {
              const {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              } = article;
              const extractedData = {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              };

              return <NewsArticle key={`tech${index}`} {...extractedData} />;
            })}
          </Box>
          {/* Entertainment section */}
          <Typography variant="h4" mb="10px">
            Entertainment
          </Typography>
          <hr />
          <Box
            width="100%"
            display="grid"
            gap="16px"
            gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            gridAutoFlow="column"
            gridAutoColumns="minmax(400px, 1fr)"
            sx={{ overflowX: "auto" }}
          >
            {data.entertainment.articles.map((article, index) => {
              const {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              } = article;
              const extractedData = {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              };

              return (
                <NewsArticle key={`entertain${index}`} {...extractedData} />
              );
            })}
          </Box>
          {/* Science section */}
          <Typography variant="h4" mb="10px">
            Science
          </Typography>
          <hr />
          <Box
            width="100%"
            display="grid"
            gap="16px"
            gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            gridAutoFlow="column"
            gridAutoColumns="minmax(400px, 1fr)"
            sx={{ overflowX: "auto" }}
          >
            {data.science.articles.map((article, index) => {
              const {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              } = article;
              const extractedData = {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              };

              return <NewsArticle key={`science${index}`} {...extractedData} />;
            })}
          </Box>
          {/* Business section */}
          <Typography variant="h4" mb="10px">
            Business
          </Typography>
          <hr />
          <Box
            width="100%"
            display="grid"
            gap="16px"
            gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            gridAutoFlow="column"
            gridAutoColumns="minmax(400px, 1fr)"
            sx={{ overflowX: "auto" }}
          >
            {data.business.articles.map((article, index) => {
              const {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              } = article;
              const extractedData = {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              };

              return (
                <NewsArticle key={`business${index}`} {...extractedData} />
              );
            })}
          </Box>
          {/* Sports section */}
          <Typography variant="h4" mb="10px">
            Sports
          </Typography>
          <hr />
          <Box
            width="100%"
            display="grid"
            gap="16px"
            gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            gridAutoFlow="column"
            gridAutoColumns="minmax(400px, 1fr)"
            sx={{ overflowX: "auto" }}
          >
            {data.sports.articles.map((article, index) => {
              const {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              } = article;
              const extractedData = {
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
              };

              return <NewsArticle key={`sports${index}`} {...extractedData} />;
            })}
          </Box>
        </>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default News;
