import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function Filter({ setCategory, category }) {
  function handleCategoryChange(category) {
    setCategory(category);
  }

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Tabs
        onChange={handleCategoryChange}
        value={category}
        sx={{ width: "100%", justifyContent: "space-between" }}
        variant="fullWidth"
      >
        <Tab
          label="Toutes"
          value="all"
          onClick={() => handleCategoryChange("all")}
        />
        <Tab
          label="À faire"
          value="todo"
          onClick={() => handleCategoryChange("todo")}
        />
        <Tab
          label="Terminées"
          value="completed"
          onClick={() => handleCategoryChange("completed")}
          text="Terminées"
        />
      </Tabs>
    </Box>
  );
}
