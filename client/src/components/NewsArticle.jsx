import React from "react";
import { Box, Link, Typography } from "@mui/material";

const NewsArticle = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}) => {
  return (
    <Box width="400px" border="1px solid #bbdefb" borderRadius="5px" p="20px" mb="40px">
      <Typography mb="10px" fontSize="1.75rem">
        {title}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="20px"
      >
        <Typography fontSize="1.15rem">Author: {author}</Typography>
        <Typography fontSize=".75rem">
          {new Date(publishedAt).toDateString()}
        </Typography>
      </Box>
      <Typography textAlign="justify">
        {description}
        <Link href={url} variant="inherit" color="inherit">
          Read more
        </Link>
      </Typography>

      <Box
        component="img"
        src={urlToImage}
        alt={title}
        loading="lazy"
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};

export default NewsArticle;
