import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";

export default function Application() {
  return (
    <div>
      <div>
        <Typography variant="h3" component="h2">
          Applications
        </Typography>
        <Box>
          <Button component={Link} to="gestion">
            Calculateur
          </Button>
          <Button component={Link} to="todolist">
            Tâches
          </Button>
        </Box>
        <Outlet />
      </div>
    </div>
  );
}
