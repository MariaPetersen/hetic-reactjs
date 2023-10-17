import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArticleIcon from "@mui/icons-material/Article";

export default function Articles({ articles }) {
  return (
    <Grid2
      container
      sx={{ margin: "auto", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h3" component="h2" sx={{ marginTop: "20px" }}>
        Articles
      </Typography>
      {articles.map((article) => {
        const path = `${article.id}`;
        return (
          <ListItemButton
            key={article.id}
            component={Link}
            to={path}
            sx={{
              textDecoration: "none",
              width: "200px",
              minHeight: "50px",
            }}
          >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary={article.title} />
          </ListItemButton>
        );
      })}
    </Grid2>
  );
}
